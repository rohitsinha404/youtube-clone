import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constanst";
import { Link } from "react-router-dom";

import VideoSkelton from "./skelton/VideoSkelton";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchVideos() {
    setLoading(true);
    try {
      const res = await fetch(YOUTUBE_VIDEOS_API);
      const data = await res.json();

      setVideos(data.items);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
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

  function VideoSkeltonGen() {
    // Implementation of VideoSkelton component
    return (
      <div>
        <VideoSkelton />
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <div className="flex flex-wrap justify-center items-center">
          {Array.from({ length: 10 }, (_, i) => (
            <React.Fragment key={i}>{VideoSkeltonGen()}</React.Fragment>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center">
          {videos.map((video, index) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
