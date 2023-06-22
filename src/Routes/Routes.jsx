import {
  createBrowserRouter,
 
} from "react-router-dom";
// import "./index.css";
import Main from "../Layout/Main";

import ErrorPage from "../Error/Error";
import Home from "../Pages/Home/Home";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Login/Register";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoutes";
import SingleToyDetails from "../Pages/Home/Category/SingleToyDetails/SingleToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/AllToys/AllToys";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'blog',
            element:<Blog></Blog>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:"/addtoy",
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>,
        },
        {
         path: 'toy/:id',
         element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
         loader:({params})=>fetch(`https://toy-marketplace-server-opal.vercel.app/toy/${params.id}`)


        },
        {
          path:'/mytoys',
          element:<MyToys></MyToys>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        }
      ]
    },
  ]);

  export default router;




