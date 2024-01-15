import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = ({ title }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  console.log(params);
  return (
    <div className="flex flex-col ">
      <div className=" flex gap-3   ">
        <iframe
          className="rounded-2xl my-3 ml-10 "
          width="949"
          height="534"
          src={"https://www.youtube.com/embed/" + params + "?&autoplay=1"}
          title="YouTube video player"
          autoPlay="true"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex items-center  w-[30rem]">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
