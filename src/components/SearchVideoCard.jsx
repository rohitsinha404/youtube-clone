import React from "react";

const SearchVideoCard = ({ imgSrc, title, channelName, isLive }) => {
  return (
    <div>
      <div
        className="flex shadow-md  gap-4 rounded-xl  bg-[#222] 
      sm:flex-row     sm:item-none
      flex-col items-center    "
      >
        <div>
          <img src={imgSrc} className="rounded-xl  " />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span>{channelName}</span>
          {isLive && (
            <span className="  bg-red-500 w-12 rounded px-2  animate-ping delay-1000   ">
              LIVE
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
