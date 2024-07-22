import React from "react";

const SignUp = () => {
  return (
    <div className="lg:h-screen flex-col flex lg:flex-row lg:justify-between lg:items-center w-full">
      <div className="space-y-5 p-5 lg:p-20 flex flex-col justify-center lg:w-1/2">
        <h1 className="text-4xl font-bold md:text-5xl">Sign up today with PayScan</h1>
        <p className="text-lg lg:2xl">Create an account to get started</p>
        <button className="button w-48 py-3 px-4 font-medium text-xl rounded-md text-white bg-[#141414]">
          Get started
        </button>
      </div>
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img src="https://img.freepik.com/free-photo/hand-scanning-qr-code-restaurant_23-2149357882.jpg?size=626&ext=jpg&ga=GA1.1.895871021.1671308210&semt=robertav1_2_sidr" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
