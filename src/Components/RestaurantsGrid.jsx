import React from "react";
// import { restaurants } from "../data";
import { Link, useLoaderData } from "react-router-dom";

const RestaurantsGrid = () => {
  const restaurants = useLoaderData();
  // console.log(restaurants);
  return (
    <div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => {
          const { name, photograph, id, type, place, address } = restaurant;
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
                <span> {type}</span>
                <span> {place}</span>
                <span> {address}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsGrid;
