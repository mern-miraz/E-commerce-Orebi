import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaCartPlus  } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import cartImg from "../assets/cartImg.png"
import { ImCross } from "react-icons/im";






const Navbar = () => {

    let [catShow, setCatShow] = useState (false)
    let [cartShow, setCartSHow] = useState (false)
    let [accountShow, setAccountShow] = useState (false)

    let catref = useRef()
    let cartref = useRef()
    let accountref = useRef()


    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if(catref.current.contains(e.target) == true){
                        setCatShow (!catShow)
            }else{
                setCatShow (false)
            }

            if(cartref.current.contains(e.target) == true){
                setCartSHow (!cartShow)
            }else{
                setCartSHow (false)
            }

            if(accountref.current.contains(e.target) == true){
                setAccountShow(!accountShow)
            }else{
                setAccountShow(false)
            }
        })
    },[catShow,cartShow,accountShow])


  return (
    <section className='bg-[#F5F5F3]'>
        <Container>
        <Flex className="h-[100px] items-center">
            <div className="w-[30%] relative cursor-pointer" >
                <div  ref={catref} className="flex items-center gap-x-2">
                    <HiOutlineBars3BottomLeft className='font-dmsans text-[24px] font-bold text-[#262626]'/>
                    <p className='font-dmsans text-[14px] font-bold text-[#262626]'>Shop by Category</p>
                </div>
                {catShow && <div className=" absolute top-[40px] left-0 w-[263px] bg-[#262626] rounded-[2px]">
                    <ul className=''>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[31px] duration-300 ease-in-out border-b-2 border-[#2D2D2D]'>Accesories</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[31px] duration-300 ease-in-out border-b-2 border-[#2D2D2D]'>Furniture</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[31px] duration-300 ease-in-out border-b-2 border-[#2D2D2D]'>Electronics</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[31px] duration-300 ease-in-out border-b-2 border-[#2D2D2D]'>Clothes</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[31px] duration-300 ease-in-out border-b-2 border-[#2D2D2D]'>Bags</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[31px] duration-300 ease-in-out'>Home appliances</li>
                    </ul>
                </div>}
            </div>

                <div className="w-[40%]">
                    <div className="flex items-center relative">
                        <input type='search' placeholder='Search Products' className='h-[50px] w-[601px] outline-none px-5 font-dmsans text-[22px] font-bold text-[#262626] placeholder:text-[14px] placeholder:text-[#C4C4C4] placeholder:font-normal'/>
                        <FaSearch className=' absolute top-[50%] right-8 translate-y-[-50%] text-[14px]'/>
                    </div>
                </div>

                <div className="w-[30%] flex relative justify-end gap-x-[30px]">
                <div className="">
                    <div className="flex" ref={accountref}>
                        <FaUser/>
                        <TiArrowSortedDown/>
                    </div>

                    {accountShow && <div className=" absolute top-[25px] right-0">
                        <div className="">
                                <p className='py-[17px] px-[60px] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white'>My Account</p>
                        </div>
                        <div className="">
                                <p className='py-[17px] pr-[73.5px] pl-[75.5px] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white'>Log Out</p>
                        </div>
                    </div>}

                </div>
                <div className=" "> 

            <div className=" cursor-pointer" ref={cartref}> <FaCartPlus/>  </div>
                {cartShow && <div className="absolute top-[15px] right-0">
                    <div className="p-5 bg-[#F5F5F3] flex">
                        <div className="">
                            <img src={cartImg} alt="" />
                        </div>
                        <div className=" mt-[17px] ml-5">
                            <p className='font-dmsans text-[14px] font-bold text-[#262626] '>Black Smart Watch</p>
                            <h3 className='font-dmsans text-[14px] font-bold text-[#262626] mt-[12px]'>$44.00</h3>
                        </div>
                        <div className=" mt-[35px] ml-[78px]">
                            <ImCross/>
                        </div>
                    </div>
                    

                    <div className="pt-[14px] px-[22px] pb-[20px]">
                        <div className="">
                            <h4 className='font-dmsans text-[16px] font-normal leading-[23px] text-[#767676]'>Subtotal: <span className='font-dmsans text-[16px] font-bold leading-[23px] text-[#262626]'>$44.00</span></h4>
                        </div>

                        <div className=" flex justify-around mt-[13px]">
                            <div className="">
                                <p className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent'>View Cart</p>
                            </div>
                            <div className="">
                                <p className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent'>Checkout</p>
                            </div>
                        </div>

                    </div>
                </div>}
                    

                </div>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Navbar