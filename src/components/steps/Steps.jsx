import React from "react";
import { useGlobalState } from "../../store";

const Steps = () => {
  const [steps] = useGlobalState("steps");
  return (
    <div className="flex flex-col items-center text-center space-y-10 py-12 px-5 md:p-20" id="steps">
      <div className="md:w-3/5 space-y-4 md:space-y-5">
        <h1 className="text-[#111827] text-3xl font-bold md:text-5xl">
          How purSe works
        </h1>
        <p className=" text-center text-[#525252] text-base md:text-xl">
          4 Simple Steps
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full space-y-10 md:space-y-0">
        {steps.map((step, i) => (
          <div className="flex flex-col w-72 md:w-56 items-center space-y-5" key={i}>
            <img src={step.img} className="" alt="" />
            <p  className=" text-center text-[#525252] text-base md:text-lg">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
