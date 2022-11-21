import React from "react";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

const Footer1 = () => {
  return (
    <div className="flex p-2 bg-white border-t-2 gap-8 shadow-md shadow-gray-300 text-gray-400 tracking-tighter	h-15 w-full items-center justify-center">
      <a href="" className="p-2 mr-2">
        <FaSearch className="text-[#FF385C] ml-3 scale-150 mb-2" />
        <div className="text-black text-sm">Explore</div>
      </a>
      <a href="" className="p-2 mr-2">
        <BsHeart className="ml-3 scale-150 mb-2" />
        <div className="text-black text-sm">Wishlist</div>
      </a>
      <a href="" className="p-2 mr-2">
        <FaRegUserCircle className="ml-2 scale-150 mb-2" />
        <div className="text-black text-sm">Log in</div>
      </a>
    </div>
  );
};

export default Footer1;
