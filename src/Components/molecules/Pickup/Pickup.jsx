import "./Pickup.scss";

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox"

const Pickup = () => {

  return (
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
      {/* <input type="text" id="query"/> */}
      <GoogleAutocomplete />
    </div>
  );
};

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

    const results = await getGeocode({address});
    const {lat, lng} = await getLatLng(results[0]);
    console.log(lat,lng);
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

export default Pickup;
