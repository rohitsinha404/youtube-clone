import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import MainConatiner from "./components/MainConatiner";
import SearchPage from "./components/SearchPage";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { IoLogoClosedCaptioning } from "react-icons/io";

// const [loading, setLoading] = useState(false);

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white  max-w-[100vw]  overflow-hidden ">
      {/* 
       
         Head
         Body
           Sidebar
             MenuItems
           MainConatiner
             ButtonList
             VideoConatainer
               VideoCard
       
        */}
      <Head />

      <div className="flex ">
        <div className="   ">
          <SideBar />
        </div>

        <div className="   ">
          <Routes>
            <Route path={"/"} element={<MainConatiner />} />
            <Route path={"/watch"} element={<WatchPage />} />

            <Route
              path={"/results"}
              element={
                <div className="sm:ml-[15rem] ">
                  <SearchPage />
                </div>
              }
            />
            <Route path={"*"} element={<h1>Looks Like youre lost ..... </h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
