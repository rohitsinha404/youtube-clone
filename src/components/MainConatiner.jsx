import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainConatiner = () => {
  return (
    <div className="  flex flex-col item-center justify-center ">
      <div className="max-w-[100vw]">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainConatiner;
