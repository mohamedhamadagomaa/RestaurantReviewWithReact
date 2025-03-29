import React from "react";
import { featuredRestaurants } from "../data";
import { Link } from "react-router-dom";

const FeaturedRestaurantsGrid = () => {
  return (
    <div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredRestaurants.map((restaurant) => {
          const { name, photograph, id, type } = restaurant;
          return (
            <Link
              key={id}
              to={`/Restaurants/${restaurant.id}`}
              className="card w-full  shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  src={photograph}
                  alt={name}
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">{name}</h2>
                <span>Type: {type}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedRestaurantsGrid;
