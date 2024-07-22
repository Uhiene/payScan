import React from 'react'
import Header from '../components/layout/Header'
import HeroText from '../components/hero/HeroText'
import hero from "../assets/hero/heroImg.svg"

const Hero = () => {
  return (
    <div id="home" className='bg-[#FEFBE8] flex flex-col lg:justify-between lg:h-screen w-screen'>
        <Header/>
        <div className='lg:flex justify-between'>
          <HeroText/>
          <div className='lg:w-1/2 lg:flex'>
            <img src={hero} className='w-full' alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero