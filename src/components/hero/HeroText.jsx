import React from 'react'
import btn1 from "../../assets/play_store.svg"
import btn2 from "../../assets/apple-store-black.svg"
import btnsm from "../../assets/apple-sm.svg"
import btn2sm from "../../assets/playstore-sm.svg"

const HeroText = () => {
  return (
    <div className='w-full md:w-1/2 px-5 pb-10 md:pb-0 md:px-0 md:ml-20 mt-16 md:mt-0'>
      <div className='space-y-5 mb-5 pr-18 md:pr-0'>
        <h1 className='text-[141414] font-bold hero-text text-4xl md:text-7xl leading-[40px] md:leading-[60px] tracking-[-2%] md:tracking-[-2.5%]'>
        Payment made convenient
        </h1>
        <p className='text-[#475467] font-light text-lg md:text-xl leading-6 md:leading-8'>
        Beat the cash scarcity, make payment with your camera in-stores.
        </p>
      </div>
      <div className='hidden sm:flex sm:space-x-5'>
        <img src={btn1} className='w-40' alt="" />
        <img src={btn2} className='w-40' alt="" />
      </div>
      <div className='block sm:hidden space-y-5'>
        <img src={btnsm} className='w-full' alt="" />
        <img src={btn2sm} className='w-full' alt="" />
      </div>
    </div>
  )
}

export default HeroText