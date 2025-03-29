import React from "react";
import { restaurants } from "../data";
import {
  Filters,
  PaginationContainer,
  RestaurantsContainer,
} from "../Components";
import { useLoaderData } from "react-router-dom";

export const loader = () => {
  return restaurants;
};

const Restaurants = () => {
  const restaurants = useLoaderData();
  console.log(restaurants);

  return (
    <>
      <Filters />
      <RestaurantsContainer />
      <PaginationContainer />
    </>
  );
};

export default Restaurants;
