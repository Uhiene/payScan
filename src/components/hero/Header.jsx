import hero from "../../assets/logo.svg";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-router-dom"

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      className="header flex justify-between items-center w-full p-5 md:px-20"
      id="hero"
    >
      <Link className="flex space-x-2 items-center" to={"/"}>
        <img src={hero} alt="" className="w-10 md:w-fit" />
        <h1 className="sm:text-xl md:text-4xl font-bold">PayCode</h1>
      </Link>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-2xl">
        {!nav ? <FaBars /> : <FaTimes className="hover:text-red-500" />}
      </div>
      <div className="w-3/5 justify-between items-center hidden md:flex">
        <div className="w-2/3 hidden md:flex justify-between text-black text-lg font-semibold">
          <a
            href="#home"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            About
          </a>
          <a
            href="#benefits"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            Benefits
          </a>
          <a
            href="#steps"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            How it works
          </a>
          <a
            href="#faqs"
            smooth={true}
            className="cursor-pointer hover:scale-105"
          >
            FAQs
          </a>
        </div>
        <div className="hidden md:flex">
          <button className="button p-2 px-4 font-medium text-xl rounded-md text-white bg-[#141414] hover:scale-105">
            Join Now
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-20 left-0 w-full h-screen flex bg-[#FEF7C3] z-40 flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a
            className="hover:scale-105 cursor-pointer"
            onClick={handleClick}
            href="#home"
            smooth={true}
          >
            Home
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="hover:scale-105 cursor-pointer"
            onClick={handleClick}
            href="#about"
            smooth={true}
          >
            About
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="hover:scale-105 cursor-pointer"
            onClick={handleClick}
            href="#benefits"
            smooth={true}
          >
            Benefits
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="hover:scale-105 cursor-pointer"
            onClick={handleClick}
            href="#steps"
            smooth={true}
          >
            How it works
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="hover:scale-105 cursor-pointer"
            onClick={handleClick}
            href="#faqs"
            smooth={true}
          >
            FAQs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
