import React from "react";
import Logo from "../assets/Airbnb-Logo.png";
import { BiWorld} from "react-icons/bi";
import { FaUser, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-16 ">
      {/* {Left} */}
      <a href="" className="flex h-20">
        <img src={Logo} alt="" className="object-cover -my-6" />
      </a>
      {/* {Middle} */}
      <div
        className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 
      border rounded-full"
      >
        <input
          type="search"
          placeholder=""
          name=""
          id=""
          className="p-2.5 w-[25rem] rounded-full outline-0"
        />
        <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
          <button className="w-full">Anywhere</button>
          <button className="w-full border-1 border-x px-6">Any Week</button>
          <button className="w-full text-gray-600/60 pl-2">Add guest</button>
        </div>
        <div className="bg-[#FF385C] p-2 rounded-full mr-2">
          <FaSearch className="text-white" />
        </div>
      </div>
      {/* {Right} */}
      <div className="flex items-center pr-3 font-semibold text-gray-600">
        <a href="" className="text-[17px]">Airbnb your home</a>
        <div className="flex items-center mx-8 gap-1">
          <button><BiWorld/></button> 
          <div className="">EN</div>
        </div>
        <button className="flex items-center border px-4 py-1 rounded-full gap-2 font-bold hover:shadow-lg duration-100 ease-out">
          <FiMenu className="mt-1" />
          <FaUser className="flex text-[26px] p-1 bg-[#717171] text-white rounded-full" />
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
