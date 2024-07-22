import hero from "../../assets/layout/logo.svg";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="header flex justify-between items-center w-full p-5 lg:px-20"
      id="hero"
    >
      <Link className="flex space-x-2 items-center" to={"/"}>
        <img src={hero} alt="PayScan Logo" className="w-8 lg:w-10" />
        <h1 className="text-xl sm:text-4xl font-bold">PayScan</h1>
      </Link>

      {/* Hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10 text-2xl sm:text-4xl">
        {!nav ? <FaBars /> : <FaTimes className="hover:text-red-500" />}
      </div>

      <div className="w-3/5 justify-between items-center hidden lg:flex">
        <div className="w-2/3 hidden lg:flex justify-between text-black text-lg font-semibold">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="benefits"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            Benefits
          </ScrollLink>
          <ScrollLink
            to="steps"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            How it works
          </ScrollLink>
          <ScrollLink
            to="faqs"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:scale-105"
          >
            FAQs
          </ScrollLink>
        </div>
        <div className="hidden lg:flex">
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
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            to="benefits"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            Benefits
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            to="steps"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            How it works
          </ScrollLink>
        </li>
        <li className="py-6 text-4xl">
          <ScrollLink
            to="faqs"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="hover:scale-105 cursor-pointer"
          >
            FAQs
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
