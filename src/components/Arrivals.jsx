import React from 'react'
import Container from './Container'
import Flex from './Flex'
import product1Img from "../assets/Product1.png"
import product2Img from "../assets/Product2.png"
import product3Img from "../assets/Product3.png"
import product4Img from "../assets/Product4.png"
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";




const Arrivals = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <div className="">
                <h3 className=' font-dmsans text-[39px] font-bold text-[#262626]'>New Arrivals</h3>
            </div>
            <Flex className="mt-[48px] justify-between">
                <div className=" w-[24%]">
                    <div className=" relative">
                        <img src={product1Img} alt="Product1"/>
                        <div className="">
                            <p className=' absolute top-5 left-5 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>10%</p>
                        </div>
                        <div data-aos="fade-up" className=" absolute w-full bottom-0 right-0 bg-[#FFF] pr-[30px] py-[26px] opacity-0 hover:opacity-[1] transition duration-700 ease-in-out">
                            <div className="flex items-center gap-x-2 text-end justify-end">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Wish List</p>
                                <FaHeart/>
                            </div>
                            <div className=" flex items-center gap-x-2 text-end justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Compare</p>
                                <IoGitCompareSharp/>
                            </div>
                            <div className=" flex items-center gap-x-2 justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Cart</p>
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                </div>
                <div className=" w-[24%]">
                    <div className=" relative">
                        <img src={product2Img} alt="Product2" />
                        <div className="">
                            <p className=' absolute top-5 left-5 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New</p>
                        </div>
                        <div data-aos="fade-up" className=" absolute w-full bottom-0 right-0 bg-[#FFF] pr-[30px] py-[26px] opacity-0 hover:opacity-[1] transition duration-700 ease-in-out">
                            <div className="flex items-center gap-x-2 text-end justify-end">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Wish List</p>
                                <FaHeart/>
                            </div>
                            <div className=" flex items-center gap-x-2 text-end justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Compare</p>
                                <IoGitCompareSharp/>
                            </div>
                            <div className=" flex items-center gap-x-2 justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Cart</p>
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
                </div>
                <div className=" w-[24%]">
                    <div className=" relative">
                        <img src={product3Img} alt="Product3" />
                        <div className="">
                            <p className=' absolute top-5 left-5 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New</p>
                        </div>
                        <div data-aos="fade-up" className=" absolute w-full bottom-0 right-0 bg-[#FFF] pr-[30px] py-[26px] opacity-0 hover:opacity-[1] transition duration-700 ease-in-out">
                            <div className="flex items-center gap-x-2 text-end justify-end">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Wish List</p>
                                <FaHeart/>
                            </div>
                            <div className=" flex items-center gap-x-2 text-end justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Compare</p>
                                <IoGitCompareSharp/>
                            </div>
                            <div className=" flex items-center gap-x-2 justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Cart</p>
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
                </div>
                <div className=" w-[24%]">
                    <div className=" relative">
                        <img className='w-full' src={product4Img} alt="Product4" />
                        <div className="">
                            <p className=' absolute top-5 left-5 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'>New</p>
                        </div>
                        <div data-aos="fade-up" className=" absolute w-full bottom-0 right-0 bg-[#FFF] pr-[30px] py-[26px] opacity-0 hover:opacity-[1] transition duration-700 ease-in-out">
                            <div className="flex items-center gap-x-2 text-end justify-end">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Wish List</p>
                                <FaHeart/>
                            </div>
                            <div className=" flex items-center gap-x-2 text-end justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Compare</p>
                                <IoGitCompareSharp/>
                            </div>
                            <div className=" flex items-center gap-x-2 justify-end mt-5">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] transition duration-700 ease-in-out'>Add to Cart</p>
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Basic Crew  Neck Tee</h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$44.00</h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Arrivals