import React from "react";
import { SectionTitle, FeaturedRestaurantsGrid } from "./index";
const FeaturedRestaurants = () => {
  return (
    <div className="pt-24">
      <SectionTitle text={"Featured Restaurants"} />
      <FeaturedRestaurantsGrid />
    </div>
  );
};

export default FeaturedRestaurants;
