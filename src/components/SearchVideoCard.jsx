import React from "react";

const SearchVideoCard = ({ imgSrc, title, channelName }) => {
  return (
    <div>
      <div className="flex shadow-md bg-gray-100 rounded-xl ">
        <div>
          <img src={imgSrc} className="rounded-xl" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span>{channelName}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
