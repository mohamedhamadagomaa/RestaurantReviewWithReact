import React, { useState } from "react";
import { RestaurantsGrid, RestaurantList } from "./index";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const RestaurantsContainer = () => {
  const restaurants = useLoaderData();
  const totalRestaurants = restaurants.length;
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalRestaurants} Restaurant{totalRestaurants > 1 && "s"}
        </h4>
        <div>
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalRestaurants === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, No Restaurants matching you search...</h5>
        ) : layout === "grid" ? (
          <RestaurantsGrid />
        ) : (
          <RestaurantList />
        )}
      </div>
    </>
  );
};

export default RestaurantsContainer;
