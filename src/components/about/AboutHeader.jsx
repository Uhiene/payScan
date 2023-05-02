import React from "react";

const AboutHeader = () => {
  return (
    <div className="flex justify-center text-center md:pt-20 pb-10 p-5">
    <div className="w-full md:w-3/5 space-y-4 md:space-y-5">
      <h1 className="text-[#111827] text-3xl font-bold md:text-5xl">
      About PayCode
      </h1>
      <p className=" text-center text-[#525252] text-lg md:text-xl">
      Welcome to PayCode your one stop payment solution. PayCode is a QR base e-wallet solution that helps merchants, like you, accept contactless payment from customers without cash or debit card. PayCode provides seamless payment transactions without hassles 
      </p>
    </div>
    </div>
  );
};

export default AboutHeader;
