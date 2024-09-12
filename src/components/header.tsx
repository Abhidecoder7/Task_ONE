import Image from "next/image";
import { CiStar, CiDiscount1 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Logo from '@/app/icons/logo.svg'; 

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="flex justify-center items-center flex-col w-full">
        <div className="flex justify-around items-center bg-[#F5F5F5] w-full max-w-[1440px] h-[42px] px-4 overflow-x-auto">
          {/* Welcome Text */}
          <div className="w-[160px] h-[14px] flex-shrink-0">
            <a href="">
              <p className="font-normal text-left text-[14px] leading-[14px] font-ubuntu text-[#666666]">
                Welcome to Quiksale!
              </p>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-evenly text-[#666666] gap-2 items-center flex-wrap">
            <div className="flex gap-2 items-center flex-shrink-0">
              <CiStar className="text-[#FF4747]" />
              <a href="">
                <p className="font-medium text-[14px] leading-[18px] font-ubuntu text-[#666666]">
                  Free Business Listing
                </p>
              </a>
            </div>

            {/* Divider */}
            <div className="bg-[#D9D9D9] border-[1px] h-[18px] rounded-sm flex-shrink-0"></div>

            <div className="flex gap-2 items-center flex-shrink-0">
              <CiDiscount1 className="text-[#FF4747]" />
              <a href="">
                <p className="font-medium text-[14px] leading-[18px] font-ubuntu text-[#666666]">
                  Sell Your Product
                </p>
              </a>
            </div>

            {/* Divider */}
            <div className="bg-[#D9D9D9] border-[1px] h-[18px] rounded-sm flex-shrink-0"></div>

            {/* Phone Number */}
            <a href="tel:696969696969669" className="flex gap-2 items-center flex-shrink-0">
              <FiPhone className="text-[#FF4747]" />
              <p className="font-medium text-[14px] leading-[18px] font-ubuntu text-[#666666]">
                1234567
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
