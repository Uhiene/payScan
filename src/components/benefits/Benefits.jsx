import React from 'react'
import hero from "../../assets/benefitsImg.svg"
import icon from "../../assets/goodIcon2.svg" 
import { useGlobalState } from '../../store';

const Benefits = () => {
    const [benefits] = useGlobalState("benefits");
  return (
    <div className="bg-[#FAFAFA] md:flex justify-between px-5 py-12 md:p-20" id='benefits'>
      <div className="w-full md:w-1/2">
        <img src={hero}  className="md:w-[90%]" alt="" />
      </div>
      <div  className="w-full md:w-1/2 space-y-3 mt-5">
        <h1 className="text-[#111827] text-3xl font-bold md:text-4xl mb-6">Key benefits</h1>
        {benefits.map((benefit, i) => (
        <div key={i} className="flex bg-white items-center space-x-3 shadow-gray-300 shadow-md p-6 md:p-5 rounded-lg hover:scale-105">
          <img src={icon} className="w-6" alt="" />
          <p className="text-base md:text-xl">{benefit.text}</p>
        </div>
         ))}
      </div>
    </div>
  )
}

export default Benefits