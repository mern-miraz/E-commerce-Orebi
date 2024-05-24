import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {IoIosArrowForward} from 'react-icons/io'
import { FaStar, FaPlus, FaMinus, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/productSlice'





const ProductDetails = () => {

  let [singleData, setSingleData] = useState([])
  let [show ,setShow] = useState(false)
  let [show2 ,setShow2] = useState(false)

  let productId = useParams()
  let dispatch = useDispatch()

  let getData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response=>{
      setSingleData(response.data);
    }))
  }

  let handleAddToCart = (item) => {
    dispatch(addToCart({...item, qun:1}))
  }

  useEffect(()=>{
    getData()
  },[])


  let clientRating = Array.from({length:5},(_, index)=>{
    let ratingNumber = index + 0.5


    return(
      singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]'/> : singleData.rating > ratingNumber ? <FaStarHalfAlt className='text-[#FFD881]'/> : <FaRegStar className='text-[#FFD881]'/>
    )
  })


  return (
    <Container>
        <div className=" pt-[30px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Products</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward/> <Link to="/product">Products</Link> </p>
                    </div>
        </div>


        <Flex className=" flex-wrap justify-between mt-5">
          {singleData?.images?.map((item)=>(         
          <div className="w-[32%] ">
            <img className=' my-5' src={item} alt="" />
          </div>
          ))}
        </Flex>


        <div className=" w-[48%]">
          <div className="">
            <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Product</h3>
          </div>
          <div className=" flex items-center my-5">
              {clientRating}
              <p className=' ms-5 font-dmsans text-[14px] font-normal text-[#767676]'>Review</p>
          </div>
          <div className=" flex items-center gap-x-8 my-5">
            <h3 className=' font-dmsans text-[16px] font-normal text-[#767676]'>$88.00</h3>
            <h3 className=' font-dmsans text-[20px] font-bold text-[#262626]'>$ {singleData.price}</h3>
          </div>

          <div className=" flex items-center py-4">
            <h3 className=' font-dmsans text-[16px] font-bold leading-[23px] text-[#262626] h-8'>COLOR:</h3>
            <div className=" ms-[53px] flex gap-x-2 h-8">
            <p className=' h-5 w-5 rounded-full bg-[#979797] hover:h-7 hover:w-7 hover:rounded-full hover:bg-[#979797] '></p>
            <p className=' h-5 w-5 rounded-full bg-[#FF8686] hover:h-7 hover:w-7 hover:rounded-full hover:bg-[#FF8686] '></p>
            <p className=' h-5 w-5 rounded-full bg-[#7ED321] hover:h-7 hover:w-7 hover:rounded-full hover:bg-[#7ED321] '></p>
            <p className=' h-5 w-5 rounded-full bg-[#B6B6B6] hover:h-7 hover:w-7 hover:rounded-full hover:bg-[#B6B6B6] '></p>
            <p className=' h-5 w-5 rounded-full bg-[#15CBA5] hover:h-7 hover:w-7 hover:rounded-full hover:bg-[#15CBA5] '></p>
            </div>
          </div>

          <div className=" flex items-center py-4">
            <div className="">
              <h3 className=' font-dmsans text-[16px] font-bold leading-[23px] text-[#262626]'>SIZE:</h3>
            </div>
            <div className=" flex items-center ms-[76px] w-[139px] h-9 border-[1px] border-[#F0F0F0] px-5 justify-between">
              <h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676]'>S</h3>
              <TiArrowSortedDown className='font-dmsans text-[24px] font-normal text-[#767676]'/>             
            </div>
          </div>

          <div className="flex items-center py-4 border-b-[1px] border-[#D8D8D8]">
            <div className="">
              <h3 className=' font-dmsans text-[16px] font-bold leading-[23px] text-[#262626]'>QUANTITY:</h3>
            </div>
            <div className="flex items-center ms-[29px] w-[139px] h-9 border-[1px] border-[#F0F0F0] px-5 justify-between">
                <FaMinus />
                <h3>1</h3>
                <FaPlus/>
              </div>

          </div>

          <div className=" flex items-center py-6 border-b-[1px] border-[#D8D8D8]">
            <h3 className=' font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>STATUS:</h3>
            <h4 className=' font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] ms-[27px]'>{singleData.availabilityStatus} : {singleData.stock}</h4>
          </div>

          <div className=" flex items-center py-6 border-b-[1px] border-[#D8D8D8]">
            <Link className='font-dmsans text-[14px] font-bold text-[#262626] py-4 px-[45px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-white ease-in-out duration-500 hover:border-transparent'>Add to Wish List</Link>
            <Link to="/cart" className='font-dmsans text-[14px] font-bold text-[#262626] py-4 px-[45px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-white ease-in-out duration-500 hover:border-transparent ms-5' onClick={()=>handleAddToCart(singleData)}>Add to Cart</Link>
          </div>

          <div className=''>
            <div className="flex items-center py-6 border-b-[1px] border-[#D8D8D8] justify-between cursor-pointer" onClick={()=>setShow(!show)}>
            <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>FEATURES  & DETAILS</h3>
            {show == true ? <RxCross2/> : <FaPlus/>}
            </div>
            {show &&
            <div className=" mt-4 border-b-[1px] border-[#D8D8D8]">
              <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> }
          </div>

          <div className='py-6'>
            <div className="flex items-center py-6 border-b-[1px] border-[#D8D8D8] justify-between cursor-pointer" onClick={()=>setShow2(!show2)}>
            <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>SHIPPING & RETURNS</h3>
            {show2 == true ? <RxCross2/> : <FaPlus/>}
            
            </div>
            {show2 &&
            <div className=" mt-4 border-b-[1px] border-[#D8D8D8]">
              <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> }
          </div>
        </div>
    </Container>
  )
}

export default ProductDetails
