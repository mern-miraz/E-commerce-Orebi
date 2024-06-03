import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement } from '../components/slice/productSlice';


const Cart = () => {
  let data = useSelector((state)=>state.product.cartItem)
  let dispatch = useDispatch()

  let handleIncrement = (index)=>{
    dispatch(productIncrement(index))
  }

  let handleDecrement = (index)=>{
    dispatch(productDecrement(index))
  }

  // let totalPrice = (index) => {
  //   dispatch(totalPrice(index))
  // }


  return (
    <Container>
      <div className=" pt-[30px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Cart</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link className='me-2' to="/">Home</Link> &gt; <Link className='ms-2' to="/cart">Products</Link> </p>
                    </div>
      </div>

      <div className="mt-20">
      <div className=" flex justify-between h-[80px] items-center bg-[#F5F5F3]">
        <div className="w-[40%]">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-6'>Product</h3>
        </div>
        <div className="w-[20%]">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Price</h3>
        </div>
        <div className="w-[20%]">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>Quantity</h3>
        </div>
        <div className="w-[20%]">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>Total</h3>
        </div>
      </div>
      {data.map((item, index)=>(     
      <div className="h-[150px] flex items-center">
        <div className="flex items-center w-[40%]">
          <RxCross2 className=' font-dmsans text-[20px] font-bold text-[#262626] leading-[23px] ms-3'/>
          <img className='h-[100px] w-[100px] ms-10' src={item.images} alt="" />
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>{item.title}</h3>
        </div>
        <div className="w-[20%]">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>$ {item.price} </h3>
        </div>
        <div className="w-[20%]">
        <div className="flex items-center w-[139px] h-9 border-[1px] border-[#F0F0F0] px-5 justify-between ">
                <div className="cursor-pointer text-[16px] font-dmsans" onClick={ () =>  handleDecrement(index)}><FaMinus/></div>
                <h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>{item.qun}</h3>
                <div className=" cursor-pointer text-[16px] font-dmsans" onClick={()=>handleIncrement(index)}><FaPlus/></div>
        </div>
        </div>
        <div className="w-[20%]">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>${item.price*item.qun}</h3>
        </div>
      </div>
    ))}
      <div className=""></div>
      </div>
    </Container>
  )
}

export default Cart