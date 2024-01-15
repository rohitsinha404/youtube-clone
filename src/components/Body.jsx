import React from "react";
import SideBar from "./SideBar";
import MainConatiner from "./MainConatiner";
import { Outlet } from "react-router-dom";
import SearchPage from "./SearchPage";

const Body = () => {
  return (
    <div className="flex    ">
      this is body
      {/* <SideBar /> */}
      {/* <Outlet /> */}
      {/* <SearchPage /> */}
    </div>
  );
};

export default Body;
