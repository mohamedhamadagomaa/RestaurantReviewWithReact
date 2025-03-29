import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { restaurants } from "../data";
import Error from "./Error";
import { ErrorElement } from "../Components";
import { useLoaderData } from "react-router-dom";
import Map from "../Components/Map";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";

const getRestaurantById = (id) => {
  const restaurant = restaurants.find((res) => res.id == id);
  console.log(restaurant);
  return restaurant;
};

export const loader = ({ params }) => {
  const restaurant = getRestaurantById(params.id);

  return { restaurant };
};

const SingleRestaurant = () => {
  const { restaurant } = useLoaderData();
  const {
    photograph,
    name,
    type,
    operating_hours,
    address,
    place,
    id,
    position,
  } = restaurant;
  console.log(restaurant);

  if (!restaurant) {
    return (
      <div>
        <ErrorElement />
      </div>
    );
  }

  return (
    <section className="h-full">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
        </ul>
      </div>
      {/* Restaurant */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16 ">
        {/* IMAGE */}
        <img
          src={photograph}
          alt={name}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <div className="mt-5">
            <MapContainer
              center={position}
              zoom={17}
              scrollWheelZoom={false}
              className="w-full h-72 z-0"
            >
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Open Street Map">
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satalite Map">
                  <TileLayer
                    attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              <Marker position={position} key={id}>
                <Popup className="w-52 h-52 ">
                  <span className="">
                    {name}
                    <br />
                    {type}
                    <br />
                    {place}
                  </span>

                  <div className="mt-3 ">
                    <img src={photograph} alt={name} />
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            <script
              src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
              integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
              crossOrigin=""
            ></script>
          </div>
          <h1 className="capitalize text-3xl font-bold">{name}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {type}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {address}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {place}
          </h4>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {operating_hours.map((day) => {
              return (
                <div>
                  <p key={id}>Friday: {day.Friday}</p>
                  <p key={id}>Saturday: {day.Saturday}</p>
                  <p key={id}>Sunday: {day.Sunday}</p>
                  <p key={id}>Monday: {day.Monday}</p>
                  <p key={id}>Tuesday: {day.Tuesday}</p>
                  <p key={id}>Wednesday: {day.Wednesday}</p>
                  <p key={id}>Thursday: {day.Thursday}</p>
                </div>
              );
            })}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SingleRestaurant;
