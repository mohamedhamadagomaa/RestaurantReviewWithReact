import React from "react";
import { restaurantsSlider } from "../data.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl  ">
          Find your restaurant easily.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Visit our website and take your unique tour to know that we are
          different. You will find everything that makes you come again.
        </p>
        <div className="mt-10 ">
          <Link to="restaurants" className="btn btn-secondary ">
            Our Restaurants
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {restaurantsSlider.map((slid, index) => {
          const {id ,img } = slid;
          return (
            <div key={id} className="carousel-item">
              <img
                src={img}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
