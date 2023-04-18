import React from 'react'
import Header from './Header'
import HeroText from './HeroText'
import hero from "../../assets/heroImg.svg"
import heromobile from "../../assets/hero-mobile.svg"

const Hero = () => {
  return (
    <div className='bg-[#FEFBE8] flex flex-col md:justify-between md:h-screen w-screen'>
        <Header/>
        <div className='md:flex justify-between'>
          <HeroText/>
          <div className='md:w-1/2 hidden md:flex'>
            <img src={hero} className='w-full' alt="" />
          </div>
          <div className='w-full md:hidden'>
            <img src={heromobile} className='w-full' alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero