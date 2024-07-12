import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Nevbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between item-center font-semibold">
        <div className="flex item-center gap-2">
          <img onClick={(() => navigate(-1))}
            className="w-8 bg-black p-2 rounded-2x1 cursor-pointer "
            src={assets.arrow_left}
            alt="arrow"
          />
          <img onClick={(() => navigate(1))}
            className="w-8 bg-black p-2 rounded-2x1 cursor-pointer "
            src={assets.arrow_right}
            alt="arrow"
          />
        </div>
        <div className=" flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer br-5px">
            Explore Premium
          </p>
          <p className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer br-5px">
            Install App
          </p>
          <p className="bg-blue-500 text-white w-7 h-7 text-[15px]  rounded-full flex items-center justify-center cursor-pointer br-5px">
            D
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className=" text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className=" text-white px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>


      </div>
    </>
  );
};

export default Nevbar;
