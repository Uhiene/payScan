import React from "react";
import logo from "../../assets/layout/logo-white.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#141414] px-5 lg:px-20 py-10 text-gray-300 lg:flex justify-between">
      <div className="lg:flex justify-between lg:w-[60%]">
        <div className="mb-8 lg:mb-0">
          <Link className="flex space-x-2 items-center mb-2" to={"/"}>
            <img src={logo} alt="" className="w-8 lg:w-10" />
            <h1 className="lg:text-xl text-white lg:text-4xl font-bold">
              PayScan
            </h1>
          </Link>
          <p> © 2023 PayScan. All rights reserved.</p>
        </div>
        <div >
          <p className="text-xl mb-6 lg:mb-4">
            Enjoy seamless transactions <br /> without hassle.
          </p>
          <p className="mb-8 lg:md-0">email: info@PayScan.ng</p>
        </div>
      </div>
      <div className="flex items-center lg:items-start space-x-3">
        <div>
          <div className="border-white border-b pb-0 lg:pb-4 mb-4 space-x-4">
            <label htmlFor="">Email:</label>
            <input className="bg-transparent w-60" type="text" />
          </div>
          <div className="text-[#D6D6D6] text-xl space-x-5 flex">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
        <div className="p-3 rounded-full bg-white text-black">
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Footer;
