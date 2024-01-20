import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import appSlice, { closeMenu, toggleMenu } from "../utils/appSlice";
import store from "../utils/store";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return  ---> one of the design patterns !!
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-xl text-xl gap-4 flex flex-col ">
      <ul className="p-3">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <div className="">
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
      </div>
      <div className="">
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
    </div>
  );
};

export default SideBar;
