import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { IoGrid } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { apiData } from './ContextApi';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/productSlice';







const ShopProducts = () => {

    let data = useContext(apiData)
    let dispatch = useDispatch()

    let [category, setCategory] = useState(false)
    let [barnd, setBrand] = useState(false)
    let [price, setPrice] = useState(false)
    let [resPagination,setResPagination] = useState(true)

    useEffect(()=>{
        if(window.innerWidth > 1024){
            setResPagination(true)
        }else{
            setResPagination(false)
        }
    },[])

    let [subCategory, setSubCategory] = useState([])
    let [categorySearcheFilter, setCategorySearcheFilter] = useState([])
    let [filterShow, setFilterShow] = useState([])
    let [productShow, setProductShow] = useState(true)
    let [brandShow, setBrandShow] = useState([])
    let [highPrice, setHighPrice] = useState("")
    let [lowPrice, setLowPrice] = useState("")
    let [filterPrice, setFilterPrice] = useState([])
 
    let [multiList, setMultiList] = useState ('')

    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(12)
    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage
    let allData = data.slice(firstPage, lastPage)
    let pageNumber = []
    for (let i = 0; i < Math.ceil(categorySearcheFilter.length > 0 ? categorySearcheFilter : data.length / perPage); i++) {
        pageNumber.push(i)
    }

    let nextPage = () => {
        if(currentPage < pageNumber.length){
            setCurrentPage((state)=>state + 1) 
        }
    }

    let prevPage = () => {
        if(currentPage > 1){
            setCurrentPage((state)=>state - 1) 
        }
    }

    


    useEffect(() => {
        setSubCategory([...new Set(data.map((item) => item.category))])
        setBrandShow([...new Set(data.map((item) => item.brand))])

        let filterSlice = categorySearcheFilter.slice(0, 6)
        setFilterShow(filterSlice)
    }, [data, categorySearcheFilter,filterPrice])

    let handleCatShow = (citem) => {
        let categoryFilter = data.filter((item) => item.category == citem)
        setCategorySearcheFilter(categoryFilter)
    }

    let handleBrandShow = (bitem) => {
        let brandFilter = data.filter((item) => item.brand == bitem )
        setCategorySearcheFilter(brandFilter)
    }

    let handleProductShow = () => {
        setFilterShow(categorySearcheFilter)
        setProductShow(false)
    }

    let handlePrice = (value)=>{
        setLowPrice(value.low);
        setHighPrice(value.high);
        let priceFilter = data.filter((item)=>item.price > value.low && item.price < value.high)
        setFilterPrice(priceFilter);
    }
    

    let handleProductHide = () => {
        let filterSlice = categorySearcheFilter.slice(0,6)
        setFilterShow(filterSlice)
        setProductShow(true)
    }

    let hanldePCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))
    }

    let handleList = () => {
        setMultiList("activeList");
    }

    let handleShowData = (e) => {
        setPerPage(e.target.value);
    }

    return (
        <section className='bg-[#F5F5F3] px-3'>
            <Container>
                <div className=" pt-[5px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Products</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/product">Products</Link> </p>
                    </div>
                </div>


                <div className="mt-[20px] lg:flex justify-between">
                    <div className=" lg:w-[20%] w-full">
                        <div className="">
                            <h3 onClick={() => setCategory(!category)} className='font-dmsans text-[20px] font-bold text-[#262626] cursor-pointer' >Shop by Category</h3>
                            {category && <ul className='h-[300px] overflow-y-scroll'>
                                {subCategory.map((item) => (
                                    <li onClick={() => handleCatShow(item)} className={`justify-between border-b-[1px] border-[#F0F0F0] py-[5px] px-[10px] capitalize cursor-pointer "font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center bg-white hover:bg-[#262626] hover:text-white`}>{item}</li>
                                ))}
                            </ul>}

                        </div>

                        <div className=" mt-[20px] cursor-pointer" >
                            <h3 onClick={() => setBrand(!barnd)} className='font-dmsans text-[20px] font-bold text-[#262626] flex items-center justify-between'>Shop by Brand {barnd == true ? <TiArrowSortedDown /> : <TiArrowSortedUp />} </h3>
                            {barnd && <ul className='h-[300px] overflow-y-scroll'>
                                {brandShow.map((item)=>(
                                <li onClick={ () => handleBrandShow (item)} className='justify-between border-b-[1px] border-[#F0F0F0] py-[5px] px-[10px] capitalize cursor-pointer "font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] flex items-center bg-white hover:bg-[#262626] hover:text-white'>{item}</li>
                                ))}
                            </ul>}
                        </div>
                        <div className=" mt-[20px] cursor-pointer" >
                            <h3 onClick={() => setPrice(!price)} className='font-dmsans text-[20px] font-bold text-[#262626] flex items-center justify-between'>Shop by Price</h3>
                            {price && <ul>
                                <li onClick={ ()=> handlePrice({low:0, high:10})} className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$0 - $10</li>
                                <li onClick={ ()=> handlePrice({low:10, high:20})} className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]  border-b-[1px] border-[#F0F0F0] py-[20px] flex items-center'>$10 - $20</li>
                            </ul>}

                        </div>
                    </div>

                    <div className=" lg:w-[77%] w-full">
                        <div className=" lg:flex">
                            <div className=" lg:w-[40%] w-full justify-center flex lg:justify-start">
                                <div className=" flex items-center gap-x-10">
                                    <div className={`p-3 border-2 ${multiList == "activeList" ? "hover:bg-[#262626] hover:border-transparent hover:text-[#FFFFFF] text-[#737373]" : "bg-[#262626] text-white" } cursor-pointer`} onClick={()=>setMultiList("")}>
                                        <IoGrid className='text-[32px]' />
                                    </div>
                                    <div className={`p-3 border-2 ${multiList == "" ? "hover:bg-[#262626] hover:border-transparent hover:text-[#FFFFFF] text-[#737373]" : "bg-[#262626] text-white" } cursor-pointer`} onClick={handleList}>
                                        <AiOutlineBars className='text-[32px] font-bold' />
                                    </div>
                                </div>
                            </div>
                            <div className=" lg:w-[30%] hidden lg:flex items-center font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] gap-x-[14px]">
                                <h3>Sort by:</h3>
                                <div className=" flex items-center h-[36px] w-[239px] px-5 border-2 justify-between">
                                    <p>Featured</p>
                                    <TiArrowSortedDown />
                                </div>
                            </div>
                            <div className=" lg:w-[30%] lg:flex hidden items-center font-dmsans text-[16px] font-normal text-[#767676] leading-[30px] gap-x-[14px]">
                            <label
                    htmlFor=""
                    className="text-[16px] font-sans text-[#767676] font-normal"
                  >
                    Show :{" "}
                  </label>
                  <select
                    onChange={handleShowData}
                    name=""
                    id=""
                    className="border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[25px] py-[5px] text-[16px] font-sans text-[#767676] font-normal"
                  >
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                  </select>
                            </div>
                        </div>


                        <Flex className=" flex-wrap justify-between">
                            { filterPrice.length > 0 ?
                                <>
                                <div className="">
                                    <div className={` ${multiList == "activeList" ? "" : "flex flex-wrap justify-between" }`}>
                                        {filterPrice.map((item) => (
                                            <div className="  cursor-pointer mt-[28px]">
                                                <div className="p-2 bg-[#FFFF]">
                                                    <div className=" relative group overflow-hidden">
                                                        <Link to={`/product/${item.id}`}>
                                                            <img className='w-full lg:h-[350px] h-[200px] hover:scale-125 duration-700 ease-in-out' src={item.thumbnail} alt="" />
                                                        </Link>

                                                        <div className="">
                                                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'> {item.discountPercentage} %</p>
                                                        </div>
                                                        <div className=" absolute w-full bottom-[-200px] group-hover:bottom-0 right-0 bg-[#FFF] lg:pr-[30px] lg:py-[26px] py-3 opacity-0 group-hover:opacity-[1] duration-700 ease-in-out hover:skew-y-3">
                                                            <div className="flex items-center gap-x-2 text-end justify-end">
                                                                <p className='font-dmsans lg:text-[16px] text-[14px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Wish List</p>
                                                                <FaHeart />
                                                            </div>
                                                            <div className=" flex items-center gap-x-2 text-end justify-end lg:pt-5 pt-1">
                                                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Compare</p>
                                                                <TfiReload />
                                                            </div>
                                                            <div className=" flex items-center gap-x-2 justify-end lg:pt-5 pt-1">
                                                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out' onClick={() => hanldePCart(item)}>Add to Cart</p>
                                                                <FaShoppingCart />
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
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                    {/* <div className="mt-5 cursor-pointer items-center justify-center flex relative after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-[#767676] after:top-[50%] after:translate-y-[-50%] after:left-0 after:bg-from-indigo-50 after:z-10">
                                        {productShow ? categorySearcheFilter.length > 6 &&
                                            <div className="">
                                                <button className=' border-[2px] border-[#767676] rounded-3xl py-1 px-8 z-50 relative bg-white font-dmsans font-bold text-[16px] hover:bg-[#262626] hover:text-white duration-150 ease-in-out hover:border-transparent '  onClick={handleProductShow}>Show All</button>
                                            </div>
                                            :
                                            <button className=' border-[2px] border-[#767676] rounded-3xl py-1 px-8 z-50 relative bg-white font-dmsans font-bold text-[16px] hover:bg-[#262626] hover:text-white duration-150 ease-in-out hover:border-transparent ' onClick={handleProductHide}>Hide</button>
                                        }
                                    </div> */}
                                </>
                            :

                            
                            categorySearcheFilter.length > 0 ?
                                <>
                                <div className="">
                                    <div className={` ${multiList == "activeList" ? "" : "flex flex-wrap justify-between" }`}>
                                        {filterShow.map((item) => (
                                            <div className="  cursor-pointer mt-[28px]">
                                                <div className="p-2 bg-[#FFFF]">
                                                    <div className=" relative group overflow-hidden">
                                                        <Link to={`/product/${item.id}`}>
                                                            <img className='w-full lg:h-[350px] h-[200px] hover:scale-125 duration-700 ease-in-out' src={item.thumbnail} alt="Product4" />
                                                        </Link>

                                                        <div className="">
                                                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'> {item.discountPercentage} %</p>
                                                        </div>
                                                        <div className=" absolute w-full bottom-[-200px] group-hover:bottom-0 right-0 bg-[#FFF] lg:pr-[30px] lg:py-[26px] py-3 opacity-0 group-hover:opacity-[1] duration-700 ease-in-out hover:skew-y-3">
                                                            <div className="flex items-center gap-x-2 text-end justify-end">
                                                                <p className='font-dmsans lg:text-[16px] text-[14px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Wish List</p>
                                                                <FaHeart />
                                                            </div>
                                                            <div className=" flex items-center gap-x-2 text-end justify-end lg:pt-5 pt-1">
                                                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Compare</p>
                                                                <TfiReload />
                                                            </div>
                                                            <div className=" flex items-center gap-x-2 justify-end lg:pt-5 pt-1">
                                                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out' onClick={() => hanldePCart(item)}>Add to Cart</p>
                                                                <FaShoppingCart />
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
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                    <div className="mt-5 cursor-pointer items-center justify-center flex relative after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-[#767676] after:top-[50%] after:translate-y-[-50%] after:left-0 after:bg-from-indigo-50 after:z-10">
                                        {productShow ? categorySearcheFilter.length > 6 &&
                                            <div className="">
                                                <button className=' border-[2px] border-[#767676] rounded-3xl py-1 px-8 z-50 relative bg-white font-dmsans font-bold text-[16px] hover:bg-[#262626] hover:text-white duration-150 ease-in-out hover:border-transparent '  onClick={handleProductShow}>Show All</button>
                                            </div>
                                            :
                                            <button className=' border-[2px] border-[#767676] rounded-3xl py-1 px-8 z-50 relative bg-white font-dmsans font-bold text-[16px] hover:bg-[#262626] hover:text-white duration-150 ease-in-out hover:border-transparent ' onClick={handleProductHide}>Hide</button>
                                        }
                                    </div>
                                </>
                                :

                                <div className={` ${multiList == "activeList" ? "" : "flex flex-wrap justify-between " }`}>
                                {allData.map((item) => (
                                        <div className="  cursor-pointer mt-[28px] lg:w-[32%] w-[49%] flex flex-wrap justify-between">
                                        <div className="p-2 bg-[#FFFF]">
                                            <div className=" relative group overflow-hidden">
                                                <Link to={`/product/${item.id}`}>
                                                    <img className='w-full lg:h-[350px] h-[200px]' src={item.thumbnail} alt="Product4" />
                                                </Link>
                                                <div className="">
                                                    <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'> {item.discountPercentage} %</p>
                                                </div>
                                                <div className=" absolute w-full bottom-[-200px] group-hover:bottom-0 right-0 bg-[#FFF] lg:pr-[30px] lg:py-[26px] py-3 opacity-0 group-hover:opacity-[1] duration-300 ease-in-out">
                                                    <div className="flex items-center gap-x-2 text-end justify-end">
                                                        <p className='font-dmsans lg:text-[16px] text-[14px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Wish List</p>
                                                        <FaHeart />
                                                    </div>
                                                    <div className=" flex items-center gap-x-2 text-end justify-end lg:pt-5 pt-1">
                                                        <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Compare</p>
                                                        <TfiReload />
                                                    </div>
                                                    <div className=" flex items-center gap-x-2 justify-end lg:pt-5 pt-1">
                                                        <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out' onClick={() => hanldePCart(item)}>Add to Cart</p>
                                                        <FaShoppingCart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" lg:flex lg:justify-between mt-[24px]">
                                                <div className=""><h3 className='font-dmsans lg:text-[20px] text-[15px] font-bold text-[#262626]'> {item.title} </h3></div>
                                                <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$ {item.price} </h3></div>
                                            </div>
                                            <div className=" mt-2">
                                                <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

<Flex className=" justify-between py-[50px]">
                            <div className=" lg:w-[50%] w-full">
                                <>
                                    <nav aria-label="Page navigation example">
                                        <ul className="inline-flex -space-x-px text-sm cursor-pointer">
                                            {currentPage > 1 ? pageNumber.length > 0 && <li onClick={prevPage}>
                                                    <Link
                                                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                    >
                                                        Previous
                                                    </Link>
                                                </li> : ""
                                                
                                            }

                                            {resPagination &&
                                            pageNumber.map((item, i) => (
                                                
                                                <li>
                                                    <Link onClick={() => setCurrentPage(item + 1)} className={currentPage == i + 1 ? " flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626] border border-gray-300 cursor-pointer" : " flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300"}>
                                                    {item + 1}
                                                </Link>
                                                </li>                                                
                                            ))
                                            }

                                            {currentPage < pageNumber.length ? pageNumber.length > 0 &&
                                                <li onClick={nextPage}>
                                                    <Link
                                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                    >
                                                        Next
                                                    </Link>
                                                </li> : ""
                                            }
                                        </ul>
                                    </nav>

                                </>

                            </div>

                            <div className=" hidden">
                                <div className="">
                                    <h2>Products from 1 to {perPage} of {data.length}</h2>
                                </div>
                            </div>
                        </Flex>
                                    </div>
                            }
                            
                        </Flex>


                        
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default ShopProducts