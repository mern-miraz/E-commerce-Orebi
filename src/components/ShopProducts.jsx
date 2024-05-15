import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { IoGrid } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { apiData } from './ContextApi';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";






const ShopProducts = () => {

    let data = useContext(apiData)

    let [category,setCategory] = useState (false)
    let [color,setColor] = useState (false)
    let [barnd,setBrand] = useState (false)
    let [price,setPrice] = useState (false)


    // let categoryref = useRef()
    // let coloref = useRef()
    // let brandref = useRef()
    // let priceref = useRef ()



    // useEffect(()=>{
    //         document.addEventListener("click",(e)=>{
    //                 if(categoryref.current.contains(e.target) == true){
    //                     setCategory(!category)
    //                 }else{
    //                     if(e.target.tagName !== "LI"){
    //                         setCategory(false)
    //                     }
    //                 }

    //                 if(coloref.current.contains(e.target) == true){
    //                     setColor(!color)
    //                 }else{
    //                     setColor(false)
    //                 }

    //                 if(brandref.current.contains(e.target) == true){
    //                     setBrand(!barnd)
    //                 }else{
    //                     setBrand(false)
    //                 }


    //                 // if(priceref.current.contains(e.target) == true){
    //                 //     setPrice(!price)
    //                 // }else{
    //                 //     setPrice(false)
    //                 // }

    //         })
    // },[category,color,barnd,price])

  return (
    <section>
        <Container>
                <div className=" mt-[100px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Products</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward/> <Link to="/shop">Products</Link> </p>
                    </div>
                </div>
            <Flex className="mt-[100px] justify-between">
                <div className=" w-[20%]">
                    <div className=" cursor-pointer" onClick={()=>setCategory(!category)}>
                        <h3 className='font-dmsans text-[20px] font-bold text-[#262626]' >Shop by Category</h3>
                        {category && <ul className=''>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center justify-between border-b-[1px] border-[#F0F0F0] py-[20px]'>Category 1 <FaPlus/></li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center justify-between border-b-[1px] border-[#F0F0F0] py-[20px]'>Category 2</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center justify-between border-b-[1px] border-[#F0F0F0] py-[20px]'>Category 3 <FaPlus/></li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center justify-between border-b-[1px] border-[#F0F0F0] py-[20px]'>Category 4</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center justify-between border-b-[1px] border-[#F0F0F0] py-[20px]'>Category 5</li>
                        </ul>}
                        
                    </div>
                    <div className=" mt-[50px] cursor-pointer" onClick={()=>setColor(!color)}>
                        <h3 className='font-dmsans text-[20px] font-bold text-[#262626] flex items-center justify-between'>Shop by Color {color == true ?<TiArrowSortedDown/> : <TiArrowSortedUp/>} </h3>
                        {color && <ul className=''>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'> <p className='h-3 w-3 rounded-full bg-[#000000] mr-[10px]'/> Color 1</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'><p className='h-3 w-3 rounded-full bg-[#FF8686] mr-[10px]'/> Color 2</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'><p className='h-3 w-3 rounded-full bg-[#7ED321] mr-[10px]'/> Color 3</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'><p className='h-3 w-3 rounded-full bg-[#B6B6B6] mr-[10px]'/> Color 4</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'><p className='h-3 w-3 rounded-full bg-[#15CBA5] mr-[10px]'/> Color 5</li>
                        </ul>}
                    </div>
                    <div className=" mt-[50px] cursor-pointer" onClick={()=>setBrand(!barnd)}>
                        <h3 className='font-dmsans text-[20px] font-bold text-[#262626] flex items-center justify-between'>Shop by Brand {barnd == true ?<TiArrowSortedDown/> : <TiArrowSortedUp/>} </h3>
                        {barnd && <ul>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>Brand 1</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>Brand 2</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>Brand 3</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>Brand 4</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>Brand 5</li>
                        </ul>}
                    </div>
                    <div className=" mt-[50px] cursor-pointer" onClick={()=>setPrice(!price)}>
                        <h3 className='font-dmsans text-[20px] font-bold text-[#262626] flex items-center justify-between'>Shop by Price</h3>
                        {price && <ul>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$0.00 - $9.99</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$10.00 - $19.99</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$20.00 - $29.99</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$30.00 - $39.99</li>
                            <li className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$40.00 - $69.99</li>
                        </ul>}
                        
                    </div>
                </div>

                <div className=" w-[77%]">
                    <Flex>
                        <div className=" w-[40%]">
                            <div className=" flex items-center gap-x-10">
                                <div className=" p-3 border-2 hover:bg-[#262626] hover:border-transparent hover:text-[#FFFFFF] text-[#737373]">
                                <IoGrid className='text-[32px]'/> 
                                </div>
                                <div className="p-3 border-2 hover:bg-[#262626] hover:border-transparent hover:text-[#FFFFFF] text-[#737373]">
                                    <AiOutlineBars className='text-[32px] font-bold'/>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[30%] flex items-center font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] gap-x-[14px]">
                            <h3>Sort by:</h3>
                            <div className=" flex items-center h-[36px] w-[239px] px-5 border-2 justify-between">
                                <p>Featured</p>
                                <TiArrowSortedDown/>
                            </div>
                        </div>
                        <div className=" w-[30%] flex items-center font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] gap-x-[14px]">
                            <h3>Show:</h3>
                            <div className=" flex items-center h-[36px] w-[239px] px-5 border-2 justify-between">
                                <p>36</p>
                                <TiArrowSortedDown/>
                            </div>
                        </div>
                    </Flex>

                <Flex className=" flex-wrap justify-between">
                {data.map((item)=>(
                    <div className=" w-[32%] cursor-pointer mt-[28px]">
                    <div className=" relative group overflow-hidden">
                        <img className='w-full lg:h-[350px] h-[200px]' src={item.thumbnail} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'> {item.discountPercentage} %</p>
                        </div>
                        <div className=" absolute w-full bottom-[-200px] group-hover:bottom-0 right-0 bg-[#FFF] lg:pr-[30px] lg:py-[26px] py-3 opacity-0 group-hover:opacity-[1] duration-300 ease-in-out">
                            <div className="flex items-center gap-x-2 text-end justify-end">
                                <p className='font-dmsans lg:text-[16px] text-[14px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Wish List</p>
                                <FaHeart/>
                            </div>
                            <div className=" flex items-center gap-x-2 text-end justify-end lg:pt-5 pt-1">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Compare</p>
                                <TfiReload/>
                            </div>
                            <div className=" flex items-center gap-x-2 justify-end lg:pt-5 pt-1">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Cart</p>
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'> {item.title} </h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$ {item.price} </h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
                    </div>
                ))}
                </Flex>

                <Flex className=" justify-between py-[50px]">
                    <div className=" w-[50%]">
                        <div className=' flex'>
                            <ul className=' flex justify-between gap-x-4'>
                                <li className="font-dmsans text-[14px] font-normal py-[9px] px-[16px] border-2 border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-[#FFFF] hover:border-transparent">1</li>
                                <li className="font-dmsans text-[14px] font-normal py-[9px] px-[16px] border-2 border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-[#FFFF] hover:border-transparent">2</li>
                                <li className="font-dmsans text-[14px] font-normal py-[9px] px-[16px] border-2 border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-[#FFFF] hover:border-transparent">3</li>
                                <li className="font-dmsans text-[14px] font-normal py-[9px] px-[16px] border-2 border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-[#FFFF] hover:border-transparent">4</li>
                                <li className="font-dmsans text-[14px] font-normal py-[9px] px-[16px] border-2 border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-[#FFFF] hover:border-transparent">...</li>
                                <li className="font-dmsans text-[14px] font-normal py-[9px] px-[16px] border-2 border-[#F0F0F0] text-[#767676] hover:bg-[#262626] hover:text-[#FFFF] hover:border-transparent">10</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" w-[50%] flex justify-end">
                        <div className="">
                            <h2 className='font-dmsans text-[14px] font-normal leading-[30px] text-[#767676]'>Products from 1 to 12 of 80</h2>
                        </div>
                    </div>
                </Flex>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default ShopProducts