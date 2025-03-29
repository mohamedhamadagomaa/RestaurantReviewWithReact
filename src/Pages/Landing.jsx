import React from "react";
import { FeaturedRestaurantsGrid, Hero } from "../Components";
import Map from "../Components/Map";
const Landing = () => {
  return (
    <>
      <Map />
      <Hero />
      <FeaturedRestaurantsGrid />
    </>
  );
};

export default Landing;
