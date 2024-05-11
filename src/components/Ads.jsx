import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ad1Img from "../assets/ad1.png"
import ad2Img from "../assets/ad2.png"
import ad3Img from "../assets/ad3.png"

const Ads = () => {
  return (
    <Container>
        <Flex className=" justify-between lg:mt-[174px] mt-5">
            <div className="w-[48.5%]">
                <img className='w-full' src={ad1Img} alt="ad1" />
            </div>
            <div className="w-[48.5%] flex flex-wrap">
                <div className=" w-full ">
                    <img className='w-full' src={ad2Img} alt="ad2" />
                </div>
                <div className=" w-full xl:mt-9 mt-2 sm:mt-3 md:mt-4 lg:mt-6">
                    <img className='w-full' src={ad3Img} alt="ad3" />
                </div>
            </div>
        </Flex>
    </Container>
  )
}
export default Ads