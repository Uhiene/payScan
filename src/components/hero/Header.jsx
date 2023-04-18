import hero from "../../assets/logo.svg";
import bars from "../../assets/bars3Icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex justify-between items-center w-full p-5 md:px-20" id="hero">
      <Link to={"/"}>
        <img src={hero} alt="" className="w-[133px] md:w-fit" />
      </Link>
      <div className="flex md:hidden">
        <img src={bars} className="w-xl" alt="" />
      </div>
      <div className="w-3/5 justify-between items-center hidden md:flex">
        <div className="w-3/5">
          <div className="hidden md:flex justify-between text-black w-full text-lg font-semibold">
            <a href="#hero" className="cursor-pointer">
              Home
            </a>
            <a href="#about" className="cursor-pointer">
              About
            </a>
            <a href="#benefits" className="cursor-pointer">
              Benefits
            </a>
            <a href="#steps" className="cursor-pointer">
              How it works
            </a>
            <a href="#faqs" className="cursor-pointer">
              FAQs
            </a>
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="button p-2 px-4 font-medium text-xl rounded-md text-white bg-[#141414]">
            Become a merchant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
