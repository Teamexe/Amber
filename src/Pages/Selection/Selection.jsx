import "./Selection.scss";

import React, { useState } from "react";

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
  const [selection, setSelection] = useState("");

  const firstCardHandler = () => {
    setSelection("1")
  }

  const secondCardHandler = () => {
    setSelection("2");
  }

  const thirdCardHandler = () => {
    setSelection("3");
  }

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
            <Card image='images/car1.png' name='Ambulance 1' price='$50' onClick={firstCardHandler} />
            <Card image='images/car2.png' name='Ambulance 2' price='$35' onClick={secondCardHandler} />
            <Card image='images/car3.png' name='Ambulance 3' price='$40' onClick={thirdCardHandler} />
          </div>
        </div>

        <GreenButton className='confirm_btn' type="submit" href="/confirmation">Confirm</GreenButton>
      </form>
    </div>
  );
};

export default Selection;
