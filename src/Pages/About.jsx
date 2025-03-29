import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">The</h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Restaurants World
            </div>
          </div>
        </div>
      </div>
      <p className="align-element mt-6 text-lg leading-8 max-w-2xl mx-auto">This website for reviewing the Restaurants and contain the location for them , All copyrights for the developers who create and develop it from scratch to the end , We hope that it will benefit you, even if just a little ,Thanks . </p>
      <p className="mt-20 text-center  text-xl leading-8 max-w-2xl mx-auto">All <span>&copy;</span> for <span className="underline text-green-500">M&M</span>  </p>
    </>
  );
};

export default About;
