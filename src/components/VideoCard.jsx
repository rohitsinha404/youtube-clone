import React from "react";
import CommentsContainer from "./CommentsContainer";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 sm:w-[28rem]   w-[90%] rounded-xl justify-center bg-[#1c1b1b] max-h-[432px]  ">
      <img
        width="400px"
        alt="thumnail"
        src={thumbnails.medium.url}
        className="rounded-xl"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
