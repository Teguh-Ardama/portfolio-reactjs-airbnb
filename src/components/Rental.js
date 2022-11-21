import React from "react";
import { BsStarFill } from "react-icons/bs";

const Rental = ({ title, image, location, date, price }) => {
  return (
    <a href="" className="">
      <div className="relative">
        <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
        <div className="flex">
          {/* Background */}
          <img
            className="object-cover rounded-[1.3rem] md:h-[17rem] sm:h-[13rem] w-full"
            src={image}
            alt=""
          />
          {/* Title */}
          <div className="absolute justify-between text-white font-bold bottom-6 left-6 text-[22px] md:text-[18px] sm:text-[20px] flex gap-2 items-center">
            {location}
            <span> &#x2022; </span>
            <p className="text-[18px] sm:text-[14px] text-slate-200">
              ${price}
            </p>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="pt-3 flex justify-between items-start">
        {/* Left */}
        <div className="">
          <div className="w-full text-[14px] font-bold">
            <p>{title}</p>
          </div>
          <div className="max-w-[17rem] text-[12px] -mt-1 text-gray-500">
            <p>{date}</p>
          </div>
          <div className="flex max-w-[17rem] text-[14px] font-semibold gap-1 items-center">
            <p>${price}</p>
            <p className="text-[16px] font-thin">night</p>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center text-[15px] space-x-1">
          <BsStarFill />
          <p>5.0</p>
        </div>
      </div>
    </a>
  );
};

export default Rental;
