import "./Selection.scss";

import Pickup from "../../Components/molecules/Pickup/Pickup";
import Card from "../../Components/molecules/Card/Card";
import GreenButton from "../../Components/atoms/GreenButton/GreenButton";

const Selection = () => {
  return (
    <div className="selection-container">
      {/* pickup location  */}
      <Pickup />

      {/* carousel */}
      <div className="carousel-container">
        <Card />
        <Card />
      </div>

      <GreenButton>Confirm</GreenButton>
    </div>
  );
};

export default Selection;
