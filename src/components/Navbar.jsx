import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaCartPlus  } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';






const Navbar = () => {

    let data = useSelector((state)=>state.product.cartItem)

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
                if(e.target.tagName !== "LI"){
                    setCatShow (false)
                }
            }

            if(cartref.current.contains(e.target) == true){
                setCartSHow (!cartShow)
            }else{
                if(e.target.tagName !== "DIV"){
                    setCartSHow (false)
                }
            }

            if(accountref.current.contains(e.target) == true){
                setAccountShow(!accountShow)
            }else{
                if(e.target.tagName !== "DIV"){
                    setAccountShow(false)
                }
            }
        })
    },[catShow,cartShow,accountShow])


  return (
    <section className='bg-[#F5F5F3] py-4 lg:py-0'>
    <Container>
        <div className="h-[100px] items-center flex flex-wrap px-3">
            <div className=" lg:w-[30%] w-[45%] relative cursor-pointer order-2 lg:order-1" >
                <div  ref={catref} className="flex items-center gap-x-2">
                    <HiOutlineBars3BottomLeft className='font-dmsans text-[24px] font-bold text-[#262626]'/>
                    <p className='font-dmsans text-[14px] font-bold text-[#262626]'>Shop by Category</p>
                </div>
                {catShow && <div className=" absolute top-[40px] left-0 w-[263px] bg-[#262626] rounded-[2px] z-[1]">
                    <ul className=''>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Accesories</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Furniture</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Electronics</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Clothes</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Bags</li>
                        <li className=' pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out'>Home appliances</li>
                    </ul>
                </div>}
            </div>

                <div className=" lg:w-[40%] order-1 lg:order-2 w-full flex justify-center">
                    <div className="flex items-center relative">
                        <input type='search' placeholder='Search Products' className='h-[50px] lg:w-[601px] outline-none px-5 font-dmsans text-[22px] font-bold text-[#262626] placeholder:text-[14px] placeholder:text-[#C4C4C4] placeholder:font-normal justify-center'/>
                        <FaSearch className=' absolute top-[50%] right-8 translate-y-[-50%] text-[14px]'/>
                    </div>
                </div>

                <div className=" lg:w-[30%] w-[55%] flex relative justify-end gap-x-[30px] order-3 lg:order-3">
                <div className="">
                    <div className="flex cursor-pointer" ref={accountref}>
                        <FaUser/>
                        <TiArrowSortedDown/>
                    </div>

                    {accountShow && <div className="absolute top-[25px] right-0 z-[1] h-[100px] w-[203px] bg-[#FFF]">
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
                {cartShow && <div className=" absolute top-[25px] right-0 z-[1] h-[241px] w-[360px]">
            {data.map((item)=>(               
                    <div className="w-full p-2 bg-[#F5F5F3] flex">
                        <div className="">
                            <img src={item.images} alt="" className='h-[100px] w-[100px]' />
                        </div>
                        <div className=" mt-[17px] ml-5">
                            <p className='font-dmsans text-[14px] font-bold text-[#262626] '>{item.title}</p>
                            <h3 className='font-dmsans text-[14px] font-bold text-[#262626] mt-[12px]'>$ {item.price} </h3>
                        </div>
                        <div className=" mt-[35px] ml-[78px]">
                            <ImCross/>
                        </div>
                    </div>
            ))}
                    

                    <div className="w-full pt-[14px] px-[22px] pb-[20px] bg-[#FFF]">
                        <div className="">
                            <h4 className='font-dmsans text-[16px] font-normal leading-[23px] text-[#767676]'>Subtotal: <span className='font-dmsans text-[16px] font-bold leading-[23px] text-[#262626]'>$44.00</span></h4>
                        </div>

                        <div className=" flex justify-around mt-[13px]">
                            <div className="">
                                <p className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent'> <Link to="/cart">View Cart</Link> </p>
                            </div>
                            <div className="">
                                <p className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent'>Checkout</p>
                            </div>
                        </div>
                    </div>
            </div>}
                    

                </div>
            </div>
        </div>
    </Container>
    </section>
  )
}

export default Navbar