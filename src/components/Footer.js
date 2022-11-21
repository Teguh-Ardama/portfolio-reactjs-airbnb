import React from "react";
import { BiWorld} from "react-icons/bi";
import { FaChevronUp} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-thin flex bg-white border-t-2 shadow-md shadow-gray-300 sticky 
    bottom-0 h-10 w-full items-center text-[14px] justify-between">
      <div className="flex mx-2 space-x-2">
      <p>© 2022 Airbnb, Inc.</p>
        <span className="text-[12px]">
          &#x2022;
          <a className="text-[14px] ml-1 hover:underline" href="">
            Privacy
          </a>
        </span>
        <span className="text-[12px]">
          &#x2022;
          <a className="text-[14px] ml-1 hover:underline" href="">
            Terms
          </a>
        </span>
        <span className="text-[12px]">
          &#x2022;
          <a className="text-[14px] ml-1 hover:underline" href="">
            Sitemap
          </a>
        </span>
        <span className="text-[12px]">
          &#x2022;
          <a className="text-[14px] ml-1 hover:underline" href="">
            Destination
          </a>
        </span>
      </div>
      <div className="flex items-center mx-8 gap-1 font-semibold max-sm:invisible">
        <button className="flex items-center gap-2 mr-4"><BiWorld />English &#40;EN&#41;</button>
        <button className="items-center gap-2 mr-4">$ USD</button>
        <button className="flex items-center gap-2">Support & resources <FaChevronUp/></button>
      </div>
    </div>
  );
};

export default Footer;
