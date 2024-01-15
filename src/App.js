import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import MainConatiner from "./components/MainConatiner";
import SearchPage from "./components/SearchPage";
import SideBar from "./components/SideBar";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainConatiner />,
//       },
//       {
//         path: "/watch",
//         element: <WatchPage />,
//       },
//       {
//         path: "/results",
//         element: <SearchPage />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div>
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
      <div className="flex">
        <SideBar />

        <Routes>
          <Route path={"/abc"} element={<h1>Trial hai </h1>} />
          <Route path={"/"} element={<MainConatiner />} />
          <Route path={"/watch"} element={<WatchPage />} />
          <Route path={"/results"} element={<SearchPage />} />
          <Route path={"*"} element={<h1>Looks Like youre lost ..... </h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
