import React, { useEffect, useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constanst";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    // when useeffect is called this is executed
    // it calls the api after 200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // when a new render is done then old call this return method and this clearTimeout destroys the the timeout
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function getSearchSuggestions(SUGGESTION) {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const data = await res.json();
    setSuggestions(data[1]);

    dispatch(
      cacheResult({
        [searchQuery]: data[1],
      })
    );
  }

  const dispatch = useDispatch();
  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col shadow-xl p-4 items-center  ">
      <div className=" col-span-1  flex gap-1 ">
        <IoMdMenu
          onClick={toggleMenuHandler}
          className=" text-3xl  cursor-pointer "
        />

        <img
          className="h-7 "
          src="data:image/png;base64,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"
        />
      </div>

      <div className="col-span-10 mx-auto    ">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 w-80 rounded-tl-3xl rounded-bl-3xl  shadow-sm "
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />

          <button className=" border p-3 rounded-tr-3xl rounded-br-3xl bg-slate-100 pl-6  ">
            <GoSearch className="text-2xl " />
          </button>
        </div>

        {/* search suggestions  */}
        {showSuggestion && (
          <div className="z-1 absolute bg-white  w-[19rem] mx-2 border rounded-xl">
            <ul>
              {suggestions.map((cnt) => (
                <li
                  key={cnt}
                  className="flex gap-2 p-2 hover:bg-gray-100 border-b rounded-lg"
                >
                  <GoSearch className="text-xl " />
                  {cnt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <FaUser className="text-2xl  " />
      </div>
    </div>
  );
};

export default Head;
