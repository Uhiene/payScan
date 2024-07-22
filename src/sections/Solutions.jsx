import React from "react";
import { useGlobalState } from "../store";
import hero from "../assets/solution/solutionImg.jpg"

const Solutions = () => {
    const [solutions] = useGlobalState("solutions");
  return (
    <div className="flex-col-reverse lg:flex-row flex justify-between lg:pl-0 lg:p-20">
      <div className="lg:w-1/2">
        <img src={hero} className="lg:w-11/12" alt="" />
      </div>
      <div className="lg:w-1/2 space-y-3 px-5 pb-10">
        <h1 className="text-[#111827] text-3xl font-bold lg:text-4xl mb-6">
        Solution areas
        </h1>
        <div className="flex flex-col gap-5">
        {solutions.map((solution, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg">
            <img src={solution.img} className="w-10" alt="" />
            <p className="text-lg lg:text-xl">{solution.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Solutions;
