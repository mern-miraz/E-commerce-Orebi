import React, { useContext } from 'react'
import Container from './Container'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';




function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick} className='flex h-[64px] w-[64px] bg-[#979797] rounded-full justify-center items-center absolute top-[30%] lg:right-[-30px] right-0 z-50'
      ><FaLongArrowAltRight className=' text-[24px] text-white'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick} className='flex h-[64px] w-[64px] bg-[#979797] rounded-full justify-center items-center absolute top-[30%] lg:left-[-24px] left-0 z-50'
      ><FaLongArrowAltLeft className=' text-[24px] text-white'/></div>
    );
  }



const Arrivals = () => {


    let data = useContext(apiData)
    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      };

  return (
    <section className='lg:py-[70px] py-8 px-2'>
        <Container>
            <div className="w-full">
                <h3 className=' font-dmsans text-[39px] font-bold text-[#262626]'>New Arrivals</h3>
            </div>
            <Slider {...settings}>
            {data.map((item)=>(
                    <div className=" cursor-pointer mt-[28px] px-2 ">
                    <div className=" relative group overflow-hidden">
                <Link to="/product">  
                        <img className='w-full lg:h-[350px] h-[200px]' src={item.thumbnail} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'> {item.discountPercentage} %</p>
                    </div>
                    </Link>

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
                    <Link to="/product">
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'> {item.title} </h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$ {item.price} </h3></div>
                    </div>
                    </Link>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
                    </div>
                
                ))}
                </Slider>
        </Container>
    </section>
  )
}

export default Arrivals