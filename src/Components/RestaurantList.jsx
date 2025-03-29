import React from "react";
import { useLoaderData, Link } from "react-router-dom";
const RestaurantList = () => {
  const restaurants = useLoaderData();
  console.log(restaurants.length);
  return (
    <div className="mt-12 grid gap-y-8">
      {restaurants.map((res) => {
        const { name, photograph, id, type, place, address } = res;
        return (
          <Link
            key={id}
            to={`/Restaurants/${res.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <img
              src={photograph}
              alt={name}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="ml-0 sm:ml-16">
              <h2 className="card-title capitalize tracking-wider">{name}</h2>
              <span className="list-item">Type: {type}</span>
              <span className="list-item">Place: {place}</span>
              <span className="list-item">address: {address}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantList;
