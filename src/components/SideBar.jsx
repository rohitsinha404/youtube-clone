import React from "react";
import { useSelector } from "react-redux";
import appSlice from "../utils/appSlice";
import store from "../utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return  ---> one of the design patterns !!
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-xl w-[20%]">
      <ul className="p-3">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      0
      <hr />
      <h2 className="px-3 font-bold"> Explore </h2>
      <ul className="p-3">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
      <hr />
      <h2 className="px-3 font-bold"> Subscription </h2>
      <ul className="p-3">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
    </div>
  );
};

export default SideBar;
