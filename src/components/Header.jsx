import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";


const Header = () => {

    let [show, setShow] = useState (false)

  return (
    <section className='h-[80px] items-center bg-[#FFFFFF]'>
        <Container>
        <Flex className={" lg:flex justify-between h-[80px] items-center px-3"}>
            <div className="lg:w-[40%]">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className="lg:w-[60%]">
                <ul className={`lg:flex lg:gap-x-10 py-4 font-dmsans text-[14px] font-bold text-[#767676] lg:static ${show == true ? "bg-[green] text-white  w-[200px] pl-[5%] absolute top-[60px] left-0 duration-700 ease-in-out z-[1]": " w-[200px] absolute top-[-200px] left-[-200px] duration-700 ease-in-out"}`}>
                    <li className='py-2'><a className='hover:text-[#262626]' href="#">Home</a></li>
                    <li className='py-2'><a className='hover:text-[#262626]' href="#">Shop</a></li>
                    <li className='py-2'><a className='hover:text-[#262626]' href="#">About</a></li>
                    <li className='py-2'><a className='hover:text-[#262626]' href="#">Contacts</a></li>
                    <li className='py-2'><a className='hover:text-[#262626]' href="#">Journal</a></li>
                </ul>
            </div>
            <div className="lg:hidden text-[30px]" onClick={()=> setShow (!show) }>
                {show == true ? <RxCross2/> : <FaBars/>}
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Header