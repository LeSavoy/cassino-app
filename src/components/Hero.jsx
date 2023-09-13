import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { GiPokerHand, GiReceiveMoney } from "react-icons/gi";
import { CgCardSpades } from "react-icons/cg";
import { IoIosBasketball } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { BiSolidDuplicate, BiSupport } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsFillMoonFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";
import { MdSavedSearch } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

import bonus from "../assets/img/bonus.png";
import roleta from "../assets/img/roleta.png";
import slotMachine from "../assets/img/slot-machine.png";
import crown from "../assets/img/crown.png";
import angel from "../assets/img/angel.png";

import "../assets/css/gradientText.css";

const Hero = () => {
  return (
    <main className="text-white mt-10 flex">
      <aside className="flex flex-col w-60 h-full border-r-[1px] border-gray-700">
        <div className="flex justify-end h-12 items-center mr-[26px]">
          <IoIosArrowBack />
        </div>

        <div className="flex items-center h-12 bg-[#2E2F33] text-[#CA58FE] mr-4 ml-4 rounded gap-2">
          <BsGridFill size={20} className="ml-2" />
          <span className="mr-24">Home</span>
          <IoIosArrowForward className="" />
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <GiPokerHand size={20} className="ml-2" />
          <span>Live Casino</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <GiReceiveMoney size={20} className="ml-2" />
          <span className="mr-24">Slots</span>
          <div className="w-10 h-6 text-sm bg-[#CA58FE] rounded-lg flex items-center justify-center ">
            <span className="font-semibold">02</span>
          </div>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <CgCardSpades size={20} className="ml-2" />
          <span>Blackjack</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <MdStars size={20} className="ml-2" />
          <span>Sample title</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <IoIosBasketball size={20} className="ml-2" />
          <span className="mr-24">Sports</span>
          <IoIosArrowForward />
        </div>

        <div className="flex items-center h-12 mt-4 mr-4 ml-4 gap-2 bg-[#2E2F33] rounded">
          <img src={bonus} width={45} alt="bonus" className="ml-2 -rotate-12" />
          <span>Bonus</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <div className="w-full bg-[#2E2F33] mt-4 rounded flex items-center h-12 gap-2">
            <img
              src={roleta}
              width={30}
              alt="roleta"
              className="object-contain ml-2"
            />
            <span>Spin</span>
          </div>
          <div className="w-full bg-[#2E2F33] mt-4 rounded flex items-center h-12 gap-2">
            <img
              src={slotMachine}
              width={30}
              alt="slot machine"
              className="object-contain ml-2"
            />
            <span>Quest</span>
          </div>
        </div>

        <div className="flex items-center h-12 mt-4 mr-4 ml-4 gap-2">
          <img src={crown} width={20} alt="crown" className="ml-2" />
          <span className="text-[#F09F00] font-semibold">VIP</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <BsChatLeftDotsFill size={20} className="ml-2" />
          <span>Blog</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <BiSolidDuplicate size={20} className="ml-2" />
          <span>Affiliate</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <FaHandsHelping size={20} className="ml-2" />
          <span>Sponsorship</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <BiSupport size={20} className="ml-2" />
          <span>Support</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2 mt-48 mb-2">
          <div className="w-full bg-[#2E2F33] mt-4 rounded flex items-center h-12 gap-2">
            <TbWorld size={15} className="ml-2" />
            <span className="text-sm cursor-pointer">English</span>
            <IoIosArrowForward size={12} className="rotate-90 cursor-pointer" />
          </div>

          <div className="w-full bg-[#2E2F33] mt-4 rounded flex items-center h-12 gap-2 justify-center ">
            <div className="w-14 h-8 bg-[#CA58FE] flex justify-end items-center rounded-3xl pr-1 cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-[#2e2f33d2] flex items-center justify-center">
                <BsFillMoonFill />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4 mb-4 text-[#0EC36B]">
          <SiAdguard />
          <span>Secure connection</span>
        </div>
      </aside>

      <div className="ml-20 flex w-screen justify-center">
        <div className="mt-10">
          <p className="text-[#4AD14E] font-bold mb-4">VIP Bonus</p>
          <h1 className="text-4xl font-bold mb-4">Get € 3,000 bonus</h1>
          <p className="text-[#CA58FE] font-bold text-4xl mb-4">
            NOW! &#128525;
          </p>
          <p className="font-semibold text-xl mb-4">
            Complete your profile, get your Bonus Credit
          </p>
          <button className="w-[110px] h-11 rounded-lg bg-[#4AD14E] font-semibold">
            Take Bonus
          </button>
          <div className="h-16 w-[500px] rounded-2xl border border-[#CA58FE] mt-20">
            <div className=" flex items-center h-full justify-center">
              <MdSavedSearch size={40} className="text-cyan-400" />
              <span className="pr-20 gradient-text font-bold text-lg">Ask from AI</span>
              <input
                type="text"
                placeholder="Search best games..."
                className="bg-[#2E2F33] pr-18 mr-12 p-1.5 rounded-xl border-2 border-transparent focus:border-gray-700 outline-none"
              />
              <div className="">
                <AiOutlineSend size={20} className="mr-1 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={angel} width={450} alt="angel" className="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
