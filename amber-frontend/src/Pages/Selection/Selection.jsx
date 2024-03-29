import "./Selection.scss";

import React, { useState, useContext } from "react";
import Card from "../../Components/molecules/Card/Card";
import GreenButton from "../../Components/atoms/GreenButton/GreenButton";

import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
      setPickupAddress(address);
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      latitude = lat;
      longitude = lng;
    }

    return (
      <Combobox  onSelect={handleSelect}>
        <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} />
        <ComboboxPopover>
          <ComboboxList className="combobox-list">
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
  
  let confirmedDetails;

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
      confirmedDetails = {
        distance: responseData.distance,
        duration: responseData.duration
      }
    } catch (err) {
      console.log(err);
    }
    if(selectedId && latitude) {
      navigate('/confirmation', { state: { id: selectedId, address: pickupAddress, details: confirmedDetails} });
    }
    else {
      console.log("choose a car");
    }
  }
  
  const [selectedId, setSelectedId] = useState(null);

  
  return (
    <div className="selection-container">
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

        <div className="carousel-container">
          <div className="card-container">
            {data.map(card =>
              <Card key={card.id} id={card.id} onClick={() => setSelectedId(card.id)} pickupAddress={pickupAddress} className={selectedId == card.id ? 'active' : null} />
            )}
          </div>
        </div>
        <GreenButton type="submit" className='confirm_btn'>
              Confirm
        </GreenButton>
      </form>
    </div>
  );
};

export default Selection;
