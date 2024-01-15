import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constanst";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  async function fetchVideos() {
    try {
      const res = await fetch(YOUTUBE_VIDEOS_API);
      const data = await res.json();

      setVideos(data.items);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  // if (!videos) {
  //   return <div>No video to show , api qouta expired :-( </div>;
  // }

  // return (
  //   <div>
  //     {videos.length === 0 ? (
  //       <div>No videos to show, API key expired</div>
  //     ) : (
  //       <div>hlo</div>
  //     )}
  //   </div>
  // );

  return (
    <div className="flex flex-wrap justify-center ">
      {videos.map((video, index) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
