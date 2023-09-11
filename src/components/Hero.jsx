import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { BsGridFill } from "react-icons/bs"
import { GiPokerHand, GiReceiveMoney } from "react-icons/gi"
 
const Hero = () => {
  return (
    <main className="text-white mt-10">
      <aside className="flex flex-col w-60 h-screen border-r-[1px] border-gray-700">
        <div className="flex justify-end h-12 items-center mr-[26px]">
          <IoIosArrowBack />
        </div>

        <div className="flex items-center h-12 bg-[#2E2F33] text-[#CA58FE] mr-4 ml-4 rounded gap-2">
          <BsGridFill size={20} className="ml-2"/>
          <span className="mr-24">Home</span>
          <IoIosArrowForward className=""/>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <GiPokerHand size={20}  className="ml-2"/>
          <span>Live Casino</span>
        </div>

        <div className="flex items-center h-12 mr-4 ml-4 gap-2">
          <GiReceiveMoney size={20}  className="ml-2"/>
          <span className="mr-24">Slots</span>
          <div className="w-10 h-6 text-sm bg-[#CA58FE] rounded-lg flex items-center justify-center ">
          <span className="font-semibold">02</span>

          </div>
        </div>
      </aside>
    </main>
  )
}

export default Hero