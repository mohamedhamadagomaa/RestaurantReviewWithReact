import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import { FormInput, FormSelect } from "./index";
import { restaurants } from "../data";

const uniqueData = [...new Set(restaurants.map((item) => item.type))];

const Filters = () => {
  const restaurants = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search Restaurants"
        name="search"
        size="input-sm"
      />

      <FormSelect
        size="select-sm"
        name="type"
        label={"Select Type"}
        list={uniqueData}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/restaurants" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
