import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import About1Img from "../assets/about-1.png"
import About2Img from "../assets/about-2.png"

const About = () => {
  return (
    <>
    <section className='px-[10px] lg:px-0'>
      <Container>
      <div className=" pt-[5px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>About</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/about">About</Link> </p>
                    </div>
      </div>

      <div className=" flex flex-wrap justify-between mt-[20px]">
        <div className="w-[48%] relative">
          <img src={About1Img} alt="" />
          <h3 className=' absolute lg:bottom-[50px] bottom-[10px] left-[50%] translate-x-[-50%] lg:py-[28px] lg:px-[97px] px-3 py-1  font-dmsans lg:text-[16px] text-[10px] lg:font-bold font-normal text-[#262626] border-[2px] border-[#262626] hover:border-transparent hover:bg-[#262626] hover:text-white cursor-pointer ease-in-out hover:ease-in-out hover:duration-300 duration-300'>Our Brands</h3>
        </div>
        <div className="w-[48%] relative">
          <img src={About2Img} alt="" />
          <h3 className=' absolute lg:bottom-[50px] bottom-[10px] left-[50%] translate-x-[-50%] lg:py-[28px] lg:px-[97px] px-3 py-1  font-dmsans lg:text-[16px] text-[10px] lg:font-bold font-normal text-[#262626] border-[2px] border-[#262626] hover:border-transparent hover:bg-[#262626] hover:text-white cursor-pointer ease-in-out hover:ease-in-out hover:duration-300 duration-300'>Our Brands</h3>
        </div>
      </div>

      <div className="mt-[50px]">
        <h3 className='font-dmsans lg:text-[39px] text-[20px] font-normal text-[#262626] lg:leading-[52px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
      </div>

      <div className=" my-[60px] flex flex-wrap justify-between">
        <div className=" lg:w-[32%] ">
          <h3 className='font-dmsans text-[25px] font-bold text-[#262626] leading-[36px]'>Our Vision</h3>
          <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className="lg:w-[32%] mt-5 lg:mt-0">
        <h3 className='font-dmsans text-[25px] font-bold text-[#262626] leading-[36px]'>Our Story</h3>
        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
        </div>

        <div className="lg:w-[32%] mt-5 lg:mt-0">
        <h3 className='font-dmsans text-[25px] font-bold text-[#262626] leading-[36px]'>Our Brands</h3>
        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
      </div>
      </Container>
    </section>
    </>
  )
}

export default About