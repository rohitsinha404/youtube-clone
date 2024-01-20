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
  const navigate = useNavigate();

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
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);

      const data = await res.json();
      setSuggestions(data[1]);

      dispatch(
        cacheResult({
          [searchQuery]: data[1],
        })
      );
    } catch (e) {
      console.error(e);
    }
  }

  const dispatch = useDispatch();
  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  function searchHandler() {
    navigate("/results" + "?searchQuery=" + searchQuery);
    console.log("aya idhar");
    window.location.reload(true);
  }

  return (
    <div className="flex shadow-xl p-4 sm:items-center w-[100%]    justify-between   ">
      <div className="   flex gap-1 items-center  ">
        <IoMdMenu
          onClick={toggleMenuHandler}
          className=" text-2xl  sm:text-3xl cursor-pointer "
        />
        <Link to={"/"}>
          <img
            className="  sm:w-[10rem]  w-[8rem] "
            src="https://www.gstatic.com/youtube/img/promos/growth/c78e9dad5696c3f60fd213145d543ef22ccca79f50d8a1f80833b9dc2bb89985_244x112.webp"
          />
        </Link>
      </div>

      <div className="   w-[50vw]   ">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 w-[90%] border- rounded-tl-3xl rounded-bl-3xl  shadow-sm  bg-[#121212] border-[#303030]"
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />

          <button
            type="submit"
            className=" border p-3 rounded-tr-3xl rounded-br-3xl bg-[#222] pl-6  border-[#303030] "
            onClick={searchHandler}
          >
            <GoSearch className="text-2xl " />
          </button>
        </form>

        {/* search suggestions  */}
        {showSuggestion && (
          <div className="z-1 absolute bg-[#222]   mx-2  rounded-xl w-[50vw]  ">
            <ul>
              {suggestions.map((cnt) => (
                <li key={cnt} className="flex gap-2 p-2 hover:bg-[#292828]  ">
                  <GoSearch className="text-xl " />
                  {cnt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className=" hidden sm:block">
        <FaUser className=" sm:text-2xl   sm:pl-0 ml-2  " />
      </div>
    </div>
  );
};

export default Head;
