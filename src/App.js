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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainConatiner />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

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
      <SideBar />
      {/* 
      
         search page 
         main container 
         watch page
      
       */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
