import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainConatiner = () => {
  return (
    <div
      className="flex flex-col 
        item-center"
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainConatiner;
