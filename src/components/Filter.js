import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="">
      <button className="gap-2 py-2 px-3 sm:px-4 text-gray-500 hover:border-b-2
    text-[15px] sm:text-[16px] hover:text-black w-full duration-200 ease-out"
      >
        <button className="scale-125">{icon}</button>
        <div>{title}</div>
      </button>
    </div>
      
  );
};

export default Filter;
