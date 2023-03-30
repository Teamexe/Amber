import "./Selection.scss";

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/molecules/Card/Card";
import GreenButton from "../../Components/atoms/GreenButton/GreenButton";


import { useHttpClient } from "../../hooks/http-hook";

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox"

const Selection = () => {
  const { sendRequest } = useHttpClient();
  const [selection, setSelection] = useState(null);
  const [pickupAddress, setPickupAddress] = useState();

  
  let details;
  
  let latitude, longitude;
  
  const GoogleAutocomplete = () => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
      // console.log(address);
      setPickupAddress(address);
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      latitude = lat;
      longitude = lng;
    }
    
    return (
      <Combobox onSelect={handleSelect}>
        <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && data.map(({ place_id, description }) =>
              <ComboboxOption key={place_id} value={description} />
              )}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    )
  }
  const data = [
    { id: 1, image: 'images/car1.png', name: "Ambulace 1", price: "$35", },
    { id: 2, image: 'images/car2.png', name: "Ambulace 2", price: "$69", },
    { id: 3, image: 'images/car3.png', name: "Ambulace 3", price: "$420", },
  ];
  
  const selectionHandler = async (e) => {
    e.preventDefault();
    if (selection === "") {
      throw new Error("Please select an ambulance");
    }
    else {
      details = {
        carId: selection,
        location: {
          latitude,
          longitude
        }
      }
    }
    try {
      const responseData = await sendRequest("http://localhost:3001/selectDetails",
      'POST',
      JSON.stringify(details),
      {
        'Content-Type': 'application/json'
      }
      )
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }
  
  const [selectedId, setSelectedId] = useState("0");

  // const placeConfirmHandler =()=>{
  //   console.log(pickupPlace);
  // }

  return (
    <div className="selection-container">
      {/* pickup location  */}
      <form className="selection-form" onSubmit={selectionHandler}>

        <div className="pickup-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search search-icon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <GoogleAutocomplete />
        </div>

        {/* carousel */}
        <div className="carousel-container">
          <div className="card-container">
            {data.map(card =>
              <Card key={card.id} onClick={() => setSelectedId(card.id)} image={card.image} name={card.name} price={card.price} pickupAddress={pickupAddress} className={selectedId == card.id ? 'active' : null} />
            )}
          </div>
        </div>
        </form>
        <GreenButton className='confirm_btn' href="/confirmation">Confirm</GreenButton>
    </div>

  );
};

export default Selection;
