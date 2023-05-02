import React from "react";
import { useGlobalState } from "../../store";
import hero from "../../assets/xolutionImg.svg"

const Solutions = () => {
    const [solutions] = useGlobalState("solutions");
  return (
    <div className="flex-col-reverse md:flex-row flex justify-between md:pl-0 md:p-20">
      <div className="md:w-1/2">
        <img src='https://img.freepik.com/free-photo/hands-holding-phone-close-up_23-2149303388.jpg?size=626&ext=jpg&ga=GA1.1.895871021.1671308210&semt=robertav1_2_sidr' className="md:w-[90%]" alt="" />
      </div>
      <div className="md:w-1/2 space-y-3 px-5 pb-10">
        <h1 className="text-[#111827] text-3xl font-bold md:text-4xl mb-6">
        Solution areas
        </h1>
        {solutions.map((solution, i) => (
          <div key={i} className="flex items-center space-x-3 rounded-lg">
            <img src={solution.img} className="w-12" alt="" />
            <p className="text-lg md:text-xl">{solution.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
