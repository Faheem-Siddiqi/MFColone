import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconUrl from "./marker.png";
import Image from 'next/image';

export default function Map() {
  const customIcon = new Icon({
    iconUrl: markerIconUrl,
    iconSize: [38, 38]
  });

  // map position for Paris
  const position = [48.8566, 2.3522];

  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];

  return (
    <>
      {/* 5 ZOOM LEVEL FOR COUNTRY 13 FOR CITY */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />




    <Marker position={position} >
      <Popup className="">
      <div className='flex flex-col m-0 '>
  <div>
    <Image
      className='w-full'
      src="/assets/images/map.png"
      alt='map-Image'
      width={600}
      height={10}
    />
  </div>
  <div className="mt-2 ml-2">
    <div>£5,450 / month</div>
  </div>
</div>
      </Popup>
    </Marker>


      </MapContainer>
    </>
  );
}
