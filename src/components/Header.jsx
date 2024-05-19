import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Header = () => {

    let [show, setShow] = useState (false)

    let showref = useRef()

    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(showref.current.contains(e.target) == true){
                setShow(!show)
            }else{
                setShow(false)
            }
        })
    },[show])


  return (
    <section className='h-[80px] items-center bg-[#FFFFFF] '>
        <Container>
        <Flex className={" lg:flex justify-between h-[80px] items-center px-3"}>
            <div className="lg:w-[40%]">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="lg:w-[60%]">
                <ul className={`lg:flex lg:gap-x-10 lg:pt-0 pt-[70px] font-dmsans text-[14px] font-bold text-[#767676] lg:static ${show == true ? "bg-[#F5F5F3] text-[#767676]  w-[180px] pl-[5%] h-full absolute top-0 left-0 duration-700 ease-in-out z-[1]" : " w-[180px] h-full absolute top-0 left-[-200px] duration-700 ease-in-out z-[1]"}`}>
                    <ImCross className='text-[24px] justify-end absolute top-3 right-3 lg:hidden cursor-pointer'/>

                    <li className='py-2 lg:hover:pl-0 hover:pl-[10%] duration-700 ease-in-out'><Link className='hover:text-[#262626]' refresh="true" to="/" >Home</Link></li>

                    <li className='py-2 lg:hover:pl-0 hover:pl-[10%] duration-700 ease-in-out'><Link className='hover:text-[#262626]' refresh="true" to="/product">Shop</Link></li>

                    <li className='py-2 lg:hover:pl-0 hover:pl-[10%] duration-700 ease-in-out'><Link className='hover:text-[#262626]' refresh="true" to="/about">About</Link></li>

                    <li className='py-2 lg:hover:pl-0 hover:pl-[10%] duration-700 ease-in-out'><Link className='hover:text-[#262626]' refresh="true" to="/contacts">Contacts</Link></li>

                    <li className='py-2 lg:hover:pl-0 hover:pl-[10%] duration-700 ease-in-out'><Link className='hover:text-[#262626]' refresh="true" to="/journal">Journal</Link></li>

                </ul>
            </div>
            <div className="lg:hidden text-[30px]" ref={showref}>
                <FaBars className=' cursor-pointer'/>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Header