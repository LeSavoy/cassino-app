import saturn from "../assets/img/saturn.png";
import cards from "../assets/img/cards.png";
import giftBox from "../assets/img/gift-box.png";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-16 pt-4 pl-4">
      <div className="flex items-center gap-5">
        <img src={saturn} alt="saturn" />
        <h1 className=" text-2xl text-[#EBEBEA] mr-4">
          <span className="font-bold text-[#F9F8F9]">Game.</span>planet
        </h1>
        <span
          className="flex w-[110px] h-10 rounded-3xl justify-center items-center font-bold bg-[#2E2F33]
         text-[#AC37D6] mr-4 cursor-pointer max-md:hidden"
        >
          <img src={cards} alt="cards" width={16} className="mr-2" />
          <p>Cassino</p>
        </span>
        <span className="text-gray-400 font-medium cursor-pointer max-md:hidden">
          <p>Sport</p>
        </span>
      </div>

      <div className="text-[#EBEBEA] flex justify-center items-center pr-4 gap-5 max-md:hidden">
        <div className="flex w-14 h-12 rounded-md items-center justify-center bg-[#2E2F33]">
          <img src={giftBox} alt="gift box" width={26} className="cursor-pointer" />
        </div>
        <button className="font-bold">Login</button>
        <button className="w-24 h-14 bg-[#CA58FE] rounded-2xl font-semibold border-4 border-[#8532ac]">
          Sign Up
        </button>
      </div>

      <div
        className="text-white pr-4 hidden max-md:flex justify-end w-screen"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu size={20} className={isOpen ? "hidden" : "flex"} />
        <AiOutlineClose size={20} className={`${isOpen ? "flex" : "hidden"} z-10 `}/>
      </div>

      {/* <div className={`${isOpen ? "flex" : "hidden"} absolute mt-[70%] ml-[46%]`}>
        <ul className={`${isOpen ? "block" : "hidden"}text-[#F9F8F9]`}>
          <li>texi</li>
          <li>texi</li>
          <li>texi</li>
          <li>texi</li>
        </ul>
      </div> */}

      {/* <div className={`${isOpen ? "flex" : "hidden"} absolute w-full h-96 flex-col `} id="my-dropdown">
        <span
          className={`${
            isOpen ? "flex" : "hidden"
          }flex w-[110px] h-10 rounded-3xl justify-center items-center font-bold bg-[#2E2F33]
         text-[#AC37D6] mr-4 cursor-pointer `}
        >
          <img src={cards} alt="cards" width={16} className="mr-2" />
          <p>Cassino</p>
        </span>
        <span
          className={`${
            isOpen ? "flex" : "hidden"
          }text-gray-400 font-medium cursor-pointer`}
        >
          <p>Sport</p>
        </span>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } text-[#EBEBEA] flex justify-center items-center pr-4 gap-5 md:hidden`}
      >
        <div className="flex w-14 h-12 rounded-md items-center justify-center bg-[#2E2F33] ">
          <img src={giftBox} alt="gift box" width={26} className={``} />
        </div>
        <button className="font-bold">Login</button>
        <button className="w-24 h-14 bg-[#CA58FE] rounded-2xl font-semibold border-4 border-[#8532ac]">
          Sign Up
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
