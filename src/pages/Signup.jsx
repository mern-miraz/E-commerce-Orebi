import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, useNavigate} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase } from "firebase/database";


const Signup = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [firstName, steFirstName] = useState("")
    let [pshow, setPshow] = useState(false)
    let navigate = useNavigate()

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let handleEmail = (e) => {
        setEmail(e.target.value);
    }

    let handleFirstName = (e) => {
        steFirstName(e.target.value);
    }

    let handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password,firstName)
        .then((userCredential) => {
            updateProfile(auth.currentUser, {
                displayName: firstName, 
              }).then(() => {
                toast("lets go")
            setTimeout(() => {
                navigate("/login")
            },1500);
              })
              .then(()=>{
                set(ref(db, 'users/' + userId), {
                    username: firstName,
                    email: email,
                    profile_picture : imageUrl
                  });
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }


    return (
        <>
            
                <Container className='px-5 lg:px-0'>
                    <div className=" pt-[5px]">
                        <div className="">
                            <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Sign up</h3>
                            <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/signup">Sign up</Link> </p>
                        </div>
                    </div>


                    <div className="lg:w-[45%] w-full mt-[50px]">
                        <p className='font-dmsans text-[18px] font-normal text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    </div>


                
                <section>
                <div className="mt-[50px] py-[50px] border-y-[1px]  border-[#F0F0F0]">
                            <div>
                                <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Your Personal Details</h3>
                                <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>First Name</h3>
                                        <input onChange={handleFirstName} type="text" placeholder='First Name' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Last Name</h3>
                                        <input type="text"  placeholder='Last Name' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Email address</h3>
                                        <input onChange={handleEmail} type="email" required placeholder='company@domain.com' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Telephone</h3>
                                        <input type="tel" placeholder='Your phone number' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
                            <div>
                                <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>New Customer</h3>
                                <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 1</h3>
                                        <input type="text"  placeholder='4279 Zboncak Port Suite 6212' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 2</h3>
                                        <input type="text"  placeholder='---' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>City</h3>
                                        <input type="text"  placeholder='Your city' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Post Code</h3>
                                        <input type="text" placeholder='05228' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Division</h3>
                                        <input type="text" placeholder='Please select' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>District</h3>
                                        <input type="text" placeholder='Please select' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
                            <div>
                                <div className="">
                                <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Your Password</h3>
                                </div>
                                <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5 relative">
                                        <div className="">
                                            <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]'>Password</h3>
                                            <input onChange={handlePassword} type={pshow ? "text" : "password"} required placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                        </div>

                                        <div onClick={()=>setPshow(!pshow)} className=" absolute top-[50%] translate-y-[-50%] right-[25px] cursor-pointer text-[20px]">
                                            {pshow == true ? <FaEye/>: <FaEyeSlash/>}                                           
                                        </div>

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Repeat Password</h3>
                                        <input type="Repeat Password"  placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className=" flex mt-[40px]">
                                <input type="checkbox" /> <p className='font-dmsans text-[14px] font-normal text-[#767676] ms-3'>I have read and agree to the Privacy Policy</p>
                            </div>

                            <div className=" flex items-center mt-5">
                                <h3 className='font-dmsans text-[14px] font-normal text-[#767676]'>Subscribe Newsletter</h3>
                                <input type="radio" name='yes' className='ms-6' />
                                <h3 className='font-dmsans text-[14px] font-normal text-[#767676] ms-2'>Yes</h3>
                                <input type="radio" name='yes' className='ms-4' />
                                <h3 className='font-dmsans text-[14px] font-normal text-[#767676] ms-2'>No</h3>
                            </div>

                            <div className="mt-5">
                                <button type='submit' onClick={handleSubmit} className='font-dmsans text-[14px] font-bold text-white py-[16px] px-[77px] bg-[#262626]'>Sign up</button>
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
                           
                        </div>
                </section>
                


                </Container>
        </>
    )
}

export default Signup