import React from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, productRemove } from '../components/slice/productSlice';
import { ToastContainer, toast } from 'react-toastify';


const Cart = () => {
  let data = useSelector((state)=>state.product.cartItem)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let handleIncrement = (index)=>{
    dispatch(productIncrement(index))
  }

  let handleDecrement = (index)=>{
    dispatch(productDecrement(index))
  }

  let handleRemove = (index) => {
    dispatch(productRemove(index))
  }

  let handleCheckOut = () => {
    toast("Let's go")
    setTimeout(()=>{
      navigate("/checkout")
    },1500)
  }

  const {totalPrice, totalQuantity} = data.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity  += item.qun
    return acc
  },{totalPrice:0,totalQuantity:0})

  return (
    <Container className="px-3 lg:px-0">
      <div className=" pt-[30px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Cart</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link className='me-2' to="/">Home</Link> &gt; <Link className='ms-2' to="/cart">Products</Link> </p>
                    </div>
      </div>

      <div className="mt-20">
      <div className="flex justify-between h-[80px] items-center bg-[#F5F5F3]">
        <div className="lg:w-[40%] w-[30%] flex justify-center">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-6'>Product</h3>
        </div>
        <div className="lg:w-[20%] w-[20%] flex justify-center">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Price</h3>
        </div>
        <div className="lg:w-[20%] w-[30%] flex justify-center">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>Quantity</h3>
        </div>
        <div className="lg:w-[20%] w-[20%] flex justify-center">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>Total</h3>
        </div>
      </div>


    <div className="">
    {data.map((item, index)=>(     
      <>
      <div className="h-[150px] flex items-center border-[1px] border-[#F0F0F0]">
        <div className="lg:flex items-center lg:w-[40%] w-[30%]">
          <RxCross2 className=' hidden lg:block font-dmsans text-[20px] font-bold text-[#262626] leading-[23px] lg:ms-3 ms-0' onClick={ () => handleRemove(index)}/>
          <img className='h-[100px] w-[100px] lg:ms-10 ms-0' src={item.images} alt="" />
          <h3 className='font-dmsans hidden lg:block text-[16px] font-bold text-[#262626] leading-[23px] lg:ms-5 ms-0'>{item.title}</h3>
        </div>
        <div className="lg:w-[20%] w-[20%] flex justify-center">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>$ {item.price.toFixed()} </h3>
        </div>
        <div className="lg:w-[20%] w-[30%] flex justify-center">
        <div 
        className="flex items-center lg:w-[139px] w-[80px] h-9 border-[1px] border-[#F0F0F0] lg:px-5 px-1 justify-between ">
                <div className="cursor-pointer text-[16px] font-dmsans" onClick={ () =>  handleDecrement(index)}><FaMinus/></div>
                <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>{item.qun}</h3></div>
                <div className=" cursor-pointer text-[16px] font-dmsans" onClick={()=>handleIncrement(index)}><FaPlus/></div>
        </div>
        </div>
        <div className="lg:w-[20%] w-[20%] flex justify-center">
          <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] text-start'>${item.price.toFixed()*item.qun}</h3>
        </div>
      </div>
      </>
    ))}

    <div className=" py-3 lg:flex items-center border-2 border-[#F0F0F0] px-7">
      <div className=" flex lg:w-[25%] w-full">
        <div className="">
    <form className="w-[200px]">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-[#EAEAEA] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected="" className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>SIZE</option>
        <option value="US" className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>S</option>
        <option value="CA" className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>M</option>
        <option value="FR" className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>L</option>
        <option value="DE" className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>XL</option>
        <option value="DE" className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>XXL</option>
      </select>
    </form>
        </div>
        <div className="">
        </div>
      </div>
      <div className="lg:w-[50%] w-full">
        <h3 className='font-dmsans text-[14px] font-bold text-[#262626] leading-[30px]'>Apply coupon</h3>
      </div>
      <div className=" lg:w-[25%] w-full flex justify-start">
        <h3 className='text-end font-dmsans text-[14px] font-bold text-[#262626] leading-[30px]'>Update cart</h3>
      </div>
    </div>
    </div>

      <div className=""></div>
      </div>

      <div className=" mt-[54px] ">
        <div className=" flex justify-end">
          <h3 className='font-dmsans text-[20px] font-bold text-[#262626]'>Cart totals</h3>
        </div>
        <div className="flex lg:justify-end mt-6 justify-start">
            <div className="border-2 border-[#F0F0F0] lg:w-[600px] w-full">
            <div className="flex border-b-2 border-[#F0F0F0]">
              <div className="w-[300px] border-r-2 border-[#F0F0F0] h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>Subtotal</h3></div>
              <div className="w-[300px]  h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-normal text-[#262626] leading-[30px] ms-5'>{totalPrice.toFixed()} $</h3></div>
            </div>
            <div className="flex border-b-2 border-[#F0F0F0]">
              <div className="w-[300px] border-r-2 border-[#F0F0F0] h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>Quantity</h3></div>
              <div className="w-[300px]  h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-normal text-[#262626] leading-[30px] ms-5'>{totalQuantity}</h3></div>
            </div>
            <div className="flex">
              <div className="w-[300px] border-r-2 border-[#F0F0F0] h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>Total</h3></div>
              <div className="w-[300px]  h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-normal text-[#262626] leading-[30px] ms-5'>{totalPrice.toFixed()} $</h3></div>
            </div>
            </div>
        </div>
        {data.length > 0 ? <div className="flex justify-end mt-6">
          <p to="/checkout" className='lg:py-4 py-2 lg:px-10 px-4 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent rounded-md duration-300 ease-in-out' onClick={handleCheckOut}>Proceed to Checkout</p>
        </div> : "" }
        
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </Container>
  )
}

export default Cart