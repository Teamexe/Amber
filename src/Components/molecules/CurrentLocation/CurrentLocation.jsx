import { useState, useEffect } from "react";
import "./CurrentLocation.scss";

import { useGeolocated } from "react-geolocated";
import Geocode from "react-geocode";

const CurrentLocation = () => {
  useEffect(() => {
    
  },[]);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
      useGeolocated({
        positionOptions: {
          enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
      });
    console.log(coords);

    // Geocode.setLanguage("en");
    // Geocode.setRegion("in");

    // Geocode.enableDebug();

    // // Get address from latitude & longitude.
    // let address;
    // Geocode.fromLatLng(coords.latitude, coords.longitude).then(
    //   (response) => {
    //     address = response.results[0].formatted_address;
    //     console.log(address);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );

  // const [currentLocation, setCurrentLocation] = useState(address);

  return (
    <div className="location-outer-container">
      <div className="location">
        <span className="location-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </span>
        <p className="current-location">current location</p>
      </div>
    </div>
  );
};

export default CurrentLocation;
