import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center text-center md:pt-20 pb-10 p-5">
      <div className="w-full lg:w-3/5 space-y-4 lg:space-y-5">
        <h1 className="text-[#111827] text-3xl font-bold md:text-5xl">
          About PayScan
        </h1>
        <p className=" text-center text-[#525252] text-lg lg:text-xl">
          Welcome to PayScan your one stop payment solution. PayScan is a QR
          base e-wallet solution that helps merchants, like you, accept
          contactless payment from customers without cash or debit card. PayScan
          provides seamless payment transactions without hassles
        </p>
      </div>
    </div>
  );
};

export default Header;
