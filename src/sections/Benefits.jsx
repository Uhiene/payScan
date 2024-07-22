import React from "react";
import hero from "../assets/other/benefitsImg.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useGlobalState } from "../store";

const Benefits = () => {
  const [benefits] = useGlobalState("benefits");
  return (
    <div
      className="bg-[#FAFAFA] lg:flex justify-between px-5 py-12 lg:p-20"
      id="benefits"
    >
      <div className="w-full lg:w-1/2">
        <img src={hero} className="lg:w-[90%]" alt="" />
      </div>
      <div className="w-full lg:w-1/2 space-y-3 mt-5">
        <h1 className="text-[#111827] text-3xl font-bold lg:text-4xl mb-6">
          Key benefits
        </h1>
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="flex bg-white items-center space-x-3 shadow-gray-300 shadow-md p-6 lg:p-5 rounded-lg hover:scale-105"
          >
            <FaRegCircleCheck className="text-2xl text-green-500" />
            <p className="text-base lg:text-xl">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
