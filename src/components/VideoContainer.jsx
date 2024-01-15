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

  return (
    <div className="flex flex-wrap justify-center ">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
