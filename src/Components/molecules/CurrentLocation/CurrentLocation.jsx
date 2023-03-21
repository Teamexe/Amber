import { useState, useEffect } from "react";
import "./CurrentLocation.scss";

import { useGeolocated } from "react-geolocated";

const CurrentLocation = () => {

  const [address, setAddress] = useState(null);

  let executed = false;
  const getLatLng = async () => {
    executed=true;
    let { coords } = await
      useGeolocated({
        positionOptions: {
          enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
      });
    if (coords) {
      let latlng = {
        lat: coords.latitude,
        lng: coords.longitude
      }
      const geocoder = new google.maps.Geocoder();

      geocoder
        .geocode({ location: latlng })
        .then((response) => {
          setAddress(response.results[0].formatted_address);
        });
    }
  }

  if(!executed) {
    getLatLng();
  }


  return (
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
      <p className="current-location">{address}</p>
    </div>
  );
};

export default CurrentLocation;
