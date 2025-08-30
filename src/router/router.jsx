import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Projectditels from "../components/Projectditels";

   export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path:"/Projectditels/:id",
      Component:Projectditels
    }
   ]
  }

]);