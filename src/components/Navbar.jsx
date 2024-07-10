import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from './Container';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { productRemove } from './slice/productSlice';
import { apiData } from './ContextApi';

const Navbar = () => {

    let data = useSelector((state) => state.product.cartItem);
    let info = useContext(apiData);

    let dispatch = useDispatch();
    let handleRemove = (index) => {
        dispatch(productRemove(index));
    };
    let [catShow, setCatShow] = useState(false);
    let [cartShow, setCartShow] = useState(false);
    let [cartShowTwo, setCartShowTwo] = useState(true)
    let [accountShow, setAccountShow] = useState(false);
    let [searchInput, setSearchInput] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [activeIndex, setActiveIndex] = useState(-1);
    let navigate = useNavigate();

    let catref = useRef();
    let cartref = useRef();
    let accountref = useRef();
    let cartRef = useRef();

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (catref.current.contains(e.target)) {
                setCatShow(!catShow);
            } else {
                if (e.target.tagName !== "LI") {
                    setCatShow(false);
                }
            };

            if ( cartref.current.contains(e.target)) {
                setCartShow(!cartShow);
            } else {
                    setCartShow(false);
            };

            if (accountref.current.contains(e.target)) {
                setAccountShow(!accountShow);
            } else {
                    setAccountShow(false);
            };

            if(cartRef.current.contains(e.target)){
                setCartShowTwo(cartShowTwo)
            }else{
                
            };
        });
    }, [catShow, cartShow, accountShow,cartShowTwo]);

    let handleInput = (e) => {
        setSearchInput(e.target.value);
        setActiveIndex(-1);

        if (e.target.value === "") {
            setSearchFilter([]);
        } else {
            let searchValue = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchFilter(searchValue);
        }
    };

    let handleSingleSearch = (id) => {
        navigate(`/product/${id}`);
        setSearchFilter([]);
        setSearchInput("");
    };

    let handleKey = (e) => {
        if (e.key === 'ArrowDown') {
            setActiveIndex(prevIndex => (prevIndex + 1) % searchFilter.length);
        } else if (e.key === 'ArrowUp') {
            setActiveIndex(prevIndex => (prevIndex - 1 + searchFilter.length) % searchFilter.length);
        } else if (e.key === 'Enter' && activeIndex !== -1) {
            handleSingleSearch(searchFilter[activeIndex].id);
        }
    };

    const {totalPrice, totalQuantity} = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalQuantity  += item.qun
        return acc
      },{totalPrice:0,totalQuantity:0})

    return (
        <section className='bg-[#F5F5F3] py-4 lg:py-0'>
            <Container>
                <div className="h-[100px] items-center flex flex-wrap px-3">
                    <div className="lg:w-[30%] w-[45%] relative cursor-pointer order-2 lg:order-1">
                        <div 
                        ref={catref} 
                        className="flex items-center gap-x-2">

                            <HiOutlineBars3BottomLeft className='font-dmsans text-[24px] font-bold text-[#262626]' />
                            <p className='font-dmsans text-[14px] font-bold text-[#262626]'>Shop by Category</p>
                        </div>

                        {catShow && <div className="absolute top-[40px] left-0 w-[263px] bg-[#262626] rounded-[2px] z-[1]">
                            <ul>
                                <li className='pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Accessories</li>
                                <li className='pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Furniture</li>
                                <li className='pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Electronics</li>
                                <li className='pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Clothes</li>
                                <li className='pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out border-b-2 border-[#2D2D2D]'>Bags</li>
                                <li className='pl-[21px] py-[16px] font-dmsans text-[14px] font-normal text-[#ffffffab] hover:text-[#FFFFFF] hover:font-bold hover:pl-[40px] duration-700 ease-in-out'>Home appliances</li>
                            </ul>
                        </div>}
                    </div>

                    <div className="lg:w-[40%] order-1 lg:order-2 w-full flex justify-center">
                        <div className="relative">
                            <div className="flex items-center">

                                <input 
                                value={searchInput}
                                onChange={handleInput}
                                onKeyDown={handleKey}
                                type='search'
                                placeholder='Search Products'
                                className='h-[50px] lg:w-[601px] outline-none px-5 font-dmsans text-[22px] font-bold text-[#262626] placeholder:text-[14px] placeholder:text-[#C4C4C4] placeholder:font-normal justify-center' />

                                <FaSearch 
                                className='absolute top-[50%] right-8 translate-y-[-50%] text-[14px] cursor-pointer' />

                            </div>
                            {searchFilter.length > 0 &&
                                <div className="absolute top-[50px] left-0 h-[400px] w-[75%] z-50 overflow-y-scroll px-5 bg-[#f1f1f1]">
                                    {searchFilter.map((item, index) => (
                                        <div key={item.id} className={`${index === activeIndex ? 'bg-gray-300' : ''}`}>
                                            <div className="w-full p-2 ">
                                                <div onClick={() => handleSingleSearch(item.id)} className="flex items-center shadow-2xl my-2 cursor-pointer">
                                                    <div>
                                                        <img src={item.thumbnail} alt="" className='h-[100px] w-[100px]' />
                                                    </div>
                                                    <div className="mt-[17px] ml-5">
                                                        <p className='font-dmsans text-[14px] font-bold text-[#262626]'>{item.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>

                    <div className="lg:w-[30%] w-[55%] flex relative justify-end gap-x-[30px] order-3 lg:order-3">
                        <div>
                            <div className="flex cursor-pointer" ref={accountref}>
                                <FaUser />
                                <TiArrowSortedDown />
                            </div>

                            {accountShow && <div className="absolute top-[25px] right-0 z-[1] h-[100px] w-[203px] bg-[#FFF] cursor-pointer">
                                <ul>
                                <li>
                                    <Link to="./myaccount">
                                    <p className='py-[17px] px-[60px] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white'>My Account</p>
                                    </Link>
                                </li>
                                <li>
                                <Link to="./login">
                                    <p className='py-[17px] pr-[73.5px] pl-[75.5px] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white'>Login</p>
                                </Link>
                                </li>
                                </ul>
                            </div>}
                        </div>

                        <div className=''>
                            <div className="cursor-pointer" ref={cartref}>
                                <div className="relative">
                                    <FaCartPlus />
                                    {data.length ? <div className="absolute h-[25px] w-[25px] top-[-22px] left-[8px] bg-[#767676] rounded-full text-center text-white">{data.length}</div> : ""}
                                </div>
                            </div>
                            {data.length > 0 ? cartShow && <div className="absolute top-[25px] right-0 z-[1] h-[241px] w-[360px]">
                                <div 
                                  className=" h-[450px] overflow-y-scroll bg-white" 
                                  ref={cartRef}
                                >
                                {cartShowTwo &&
                                <div className="">
                                    {data.map((item, index) => (
                                    <div 
                                     key={index}
                                     className="w-full p-2 bg-[#F5F5F3] flex shadow-2xl hover:drop-shadow-2xl cursor-pointer" 
                                    >
                                        <div>
                                            <img src={item.images} alt="" className='h-[100px] w-[100px]' />
                                        </div>
                                        <div className="mt-[17px] ml-5">
                                            <p className='font-dmsans text-[14px] font-bold text-[#262626]'>{item.title}</p>
                                            <h3 className='font-dmsans text-[14px] font-bold text-[#262626] mt-[12px]'>$ {item.price.toFixed()}</h3>
                                        </div>
                                        <div className="mt-[35px] ml-[78px]" onClick={() => handleRemove(index)}>
                                            <ImCross />
                                        </div>
                                    </div>
                                ))}
                                </div>
                                }
                                </div>

                                <div className="w-full pt-[14px] px-[22px] pb-[20px] bg-[#FFF]">
                                    <div>
                                        <h4 className='font-dmsans text-[16px] font-normal leading-[23px] text-[#767676]'>Subtotal: <span className='font-dmsans text-[16px] font-bold leading-[23px] text-[#262626]'>$ {totalPrice.toFixed()}</span></h4>
                                    </div>

                                    <div className="flex justify-around mt-8">
                                        <div>
                                            <Link 
                                            to="/cart" 
                                            className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent'>View Cart</Link>
                                        </div>
                                        <div>
                                            <Link 
                                            to="./checkout" 
                                            className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent'>
                                                Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navbar;
