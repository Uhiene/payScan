import React from "react";
import logo from "../assets/logo-white.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import button from "../assets/Button.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#141414] px-5 md:px-20 py-10 text-[#D0D5DD] md:flex justify-between">
      <div className="md:flex justify-between md:w-[60%]">
        <div className="mb-8 md:mb-0">
          <Link className="flex space-x-2 items-center" to={"/"}>
            <img src={logo} alt="" className="w-10 md:w-14" />
            <h1 className="sm:text-xl text-white md:text-4xl font-bold">
              PayCode
            </h1>
          </Link>
          <p> © 2023 PayCode. All rights reserved.</p>
        </div>
        <div>
          <p className="text-2xl mb-6 md:mb-4">
            Enjoy seamless transactions <br />  without hassle.
          </p>
          <p className="mb-8 md:md-0">email: info@PayCode.ng</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div>
          <div className="border-white border-b pb-4 mb-4 space-x-4">
            <label htmlFor="" >Email:</label>
            <input className="bg-transparent" type="text" />
          </div>
          <div className="text-[#D6D6D6] text-xl space-x-5 flex">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
        <img src={button} className="w-fit " alt="" />
      </div>
    </div>
  );
};

export default Footer;
