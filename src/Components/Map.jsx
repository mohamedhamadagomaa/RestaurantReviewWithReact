import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import { restaurants } from "../data.js";
const position = [30.5875233, 31.5037068];

const Map = () => {
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
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
        {restaurants.map((restaurant) => {
          const {
            id,
            address,
            display,
            name,
            position,
            type,
            photograph,
            operating_hours,
            place,
          } = restaurant;
          return (
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
          );
        })}
      </MapContainer>
      <script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
      ></script>
    </>
  );
};

export default Map;
