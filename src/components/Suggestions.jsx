import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constanst";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const Suggestions = () => {
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
    <div>
      <div className="flex flex-col  ">
        {videos.map((video, index) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
