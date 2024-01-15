import React, { useEffect, useState } from "react";
import { SEARCHBOX_API } from "../utils/constanst";
import SearchVideoCard from "./SearchVideoCard";
import { Link, useParams, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);

  const [searchParam, setSearchParam] = useState("");

  const [searchParams] = useSearchParams();
  const params = searchParams.get("searchQuery");

  async function fetchVideos() {
    const res = await fetch(
      SEARCHBOX_API + params + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY
    );
    const data = await res.json();
    setVideos(data.items);
    console.log("api called with " + params);
  }

  useEffect(() => {
    fetchVideos();
  }, []);
  // console.log(videos[0]);
  // if (!videos) {
  //   return <div>No video to show , api qouta expired :-( </div>;
  // }

  return (
    <div>
      <div className="flex flex-col gap-3 w-[80%] ml-3 ">
        {videos.map((e) => (
          <Link to={"/watch?v=" + e.id.videoId} key={e.id.videoId}>
            <SearchVideoCard
              imgSrc={e.snippet.thumbnails.medium.url}
              title={e.snippet.title}
              channelName={e.snippet.channelTitle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
