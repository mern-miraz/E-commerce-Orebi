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


    <div className="">
    {data.map((item, index)=>(     
      <>
      <div className="h-[150px] flex items-center border-[1px] border-[#F0F0F0]">
        <div className="flex items-center w-[40%]">
          <RxCross2 className=' font-dmsans text-[20px] font-bold text-[#262626] leading-[23px] ms-3' onClick={ () => handleRemove(index)}/>
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
      </>
    ))}

    <div className=" h-[80px] flex items-center border-2 border-[#F0F0F0] px-7">
      <div className=" flex w-[25%]">
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
      <div className="w-[50%]">
        <h3 className='font-dmsans text-[14px] font-bold text-[#262626] leading-[30px]'>Apply coupon</h3>
      </div>
      <div className=" w-[25%]">
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
        <div className="flex justify-end mt-6">
            <div className="border-2 border-[#F0F0F0] w-[600px]">
            <div className="flex border-b-2 border-[#F0F0F0]">
              <div className="w-[300px] border-r-2 border-[#F0F0F0] h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>Subtotal</h3></div>
              <div className="w-[300px]  h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-normal text-[#262626] leading-[30px] ms-5'>{totalPrice} $</h3></div>
            </div>
            <div className="flex border-b-2 border-[#F0F0F0]">
              <div className="w-[300px] border-r-2 border-[#F0F0F0] h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>Quantity</h3></div>
              <div className="w-[300px]  h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-normal text-[#262626] leading-[30px] ms-5'>{totalQuantity}</h3></div>
            </div>
            <div className="flex">
              <div className="w-[300px] border-r-2 border-[#F0F0F0] h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px] ms-5'>Total</h3></div>
              <div className="w-[300px]  h-[54px] flex items-center"><h3 className='font-dmsans text-[16px] font-normal text-[#262626] leading-[30px] ms-5'>{totalPrice} $</h3></div>
            </div>
            </div>
        </div>
        <div className="flex justify-end mt-6">
          <p to="/checkout" className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent' onClick={handleCheckOut}>Proceed to Checkout</p>
        </div>
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