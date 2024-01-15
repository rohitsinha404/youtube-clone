import React, { useEffect, useState } from "react";
import { SEARCHBOX_API } from "../utils/constanst";
import SearchVideoCard from "./SearchVideoCard";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);

  const [searchParam, setSearchParam] = useState("");

  async function fetchVideos() {
    // const res = await fetch(
    //   SEARCHBOX_API +
    //     searchParam +
    //     "&key=" +
    //     process.env.REACT_APP_GOOGLE_API_KEY
    // );
    // const data = await res.json();
    // setVideos(data.items);
    console.log("api called with " + searchParam);
  }

  // useEffect(() => {
  //   fetchVideos();
  // }, [videos]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          fetchVideos();
        }}
      >
        <input
          className="bg-red"
          placeholder="truing"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>

      <div className="flex flex-col gap-3 w-[80%] ml-3 ">
        {videos.map((e) => (
          <SearchVideoCard
            imgSrc={e.snippet.thumbnails.medium.url}
            title={e.snippet.title}
            channelName={e.snippet.channelTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
