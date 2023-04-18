import React from "react";
import hero from "../../assets/signupImg.svg";

const SignUp = () => {
  return (
    <div className="md:h-screen flex-col flex md:flex-row justify-between items-center w-full">
      <div className="space-y-5 p-5 md:p-20 flex flex-col justify-center sm:w-1/2">
        <h1 className="text-4xl font-bold md:text-5xl">Sign up today with purSe</h1>
        <p className="text-lg md:2xl">Create an account to get started</p>
        <button className="button w-48 py-3 px-4 font-medium text-xl rounded-md text-white bg-[#141414]">
          Get started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src={hero} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
