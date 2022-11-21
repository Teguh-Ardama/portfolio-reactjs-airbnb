import React from "react";
import { ImKey } from "react-icons/im";
import { GiFishingBoat, GiMineExplosion, GiEightBall } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import { CiMountain1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { TbBuildingPavilon } from "react-icons/tb";
import Filter from "./Filter";




const Filters = () => {
  const sorting = [
    { title: "New", icon: <ImKey /> },
    { title: "Trending", icon: <AiOutlineFire /> },
    { title: "Fishing Boat", icon: <GiFishingBoat /> },
    { title: "Mountain", icon: <CiMountain1 /> },
    { title: "Mine Explosion", icon: <GiMineExplosion /> },
    { title: "Aliens", icon: <RiAliensFill /> },
    { title: "Tree", icon: <BsFillTreeFill /> },
    { title: "Hanoks", icon: <TbBuildingPavilon /> },
    { title: "Play", icon: <GiEightBall /> },
    { title: "Tree", icon: <BsFillTreeFill /> },
    { title: "Tree", icon: <BsFillTreeFill /> },
    { title: "Hanoks", icon: <TbBuildingPavilon /> },
    { title: "Play", icon: <GiEightBall /> },
    { title: "Tree", icon: <BsFillTreeFill /> },
    { title: "Hanoks", icon: <TbBuildingPavilon /> },
    { title: "Hanoks", icon: <TbBuildingPavilon /> },
  ];
  return (
    <div className="">
      <div className="flex justify-start items-center gap-4 mt-4">
        {sorting.map((obj) => (
            <Filter title={obj.title} icon={obj.icon} />
        ))}
      </div>
    </div>
    
  );
};

export default Filters;
