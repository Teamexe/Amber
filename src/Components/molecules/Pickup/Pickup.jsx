import "./Pickup.scss";

import GreenButton from "../../atoms/GreenButton/GreenButton";

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
      <input type="text" placeholder="Select Pickup Location"/>

      <GreenButton className='confirm_btn'>Confirm</GreenButton>
    </div>
  );
};

export default Pickup;
