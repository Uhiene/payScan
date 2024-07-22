import React from "react";
import { useGlobalState } from "../store";

const Steps = () => {
  const [steps] = useGlobalState("steps");
  return (
    <div
      className="flex flex-col items-center text-center space-y-10 py-12 px-5 lg:p-20"
      id="steps"
    >
      <div className="lg:w-3/5 space-y-4 lg:space-y-5">
        <h1 className="text-[#111827] text-3xl font-bold lg:text-5xl">
          How PayScan works
        </h1>
        <p className=" text-center text-[#525252] text-base lg:text-xl">
          4 Simple Steps
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full space-y-10 lg:space-y-0">
        {steps.map((step, i) => (
          <div
            className="flex flex-col justify-end w-72 lg:w-56 items-center gap-5"
            key={i}
          >
            <img src={step.img} className="w-24 h-24" alt="" />
            <p className="h-20 text-center text-[#525252] text-base lg:text-lg">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
