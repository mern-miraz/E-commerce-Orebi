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
        <Flex className={" lg:flex justify-between h-[80px] items-center"}>
            <div className="lg:w-[30%]">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className="lg:w-[70%]">
                <ul className={`lg:flex lg:gap-x-10 font-dmsans text-[14px] font-bold text-[#767676] lg:static ${show == true ? "bg-[green] text-white w-full absolute top-[80px] left-0 duration-700 ease-in-ou": "w-full absolute top-[-200px] left-0 duration-700 ease-in-ou"}`}>
                    <li><a className='hover:text-[#262626]' href="#">Home</a></li>
                    <li><a className='hover:text-[#262626]' href="#">Shop</a></li>
                    <li><a className='hover:text-[#262626]' href="#">About</a></li>
                    <li><a className='hover:text-[#262626]' href="#">Contacts</a></li>
                    <li><a className='hover:text-[#262626]' href="#">Journal</a></li>
                </ul>
            </div>
            <div className="lg:hidden" onClick={()=> setShow (!show) }>
                {show == true ? <RxCross2/> : <FaBars/>}
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Header