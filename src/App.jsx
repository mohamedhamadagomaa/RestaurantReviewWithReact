import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as SingleLoader } from "./Pages/SingleRestaurant";
import { loader as RestaurantsLoader } from "./Pages/Restaurants";

import {
  HomeLayout,
  About,
  Error,
  Landing,
  SingleRestaurant,
  Restaurants,
} from "./Pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "restaurants",
        element: <Restaurants />,
        loader: RestaurantsLoader,
      },
      {
        path: "restaurants/:id",
        element: <SingleRestaurant />,
        loader: SingleLoader,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
