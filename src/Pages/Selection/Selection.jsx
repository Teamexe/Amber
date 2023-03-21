import "./Selection.scss";

import React, { useState } from "react";

import Pickup from "../../Components/molecules/Pickup/Pickup";
import Card from "../../Components/molecules/Card/Card";
import GreenButton from "../../Components/atoms/GreenButton/GreenButton";

const Selection = () => {
  let box = document.querySelector('.card-container');
  const nextHandler = () => {
    let boxSize = box.clientWidth;
    box.scrollLeft += boxSize;
    console.log(boxSize);
  }

  const prevHandler = () => {
    let boxSize = box.clientWidth;
    box.scrollLeft -= boxSize;
    console.log(boxSize);
  }

  var service;
  var infowindow;


  const fetchDetails = async (e) => {
    e.preventDefault();
    console.log(e.target.query.value);

    infowindow = new google.maps.InfoWindow();

    var request = {
      query: 'Museum of Contemporary Art Australia',
      fields: ['name', 'geometry'],
    };

    service = new google.maps.places.PlacesService();

    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      }
      else {
        console.log(status);
      }
    });

  }


  return (


    <div className="selection-container">
      {/* pickup location  */}
      <form onSubmit={fetchDetails} className="selection-form">
        <Pickup />
        {/* carousel */}
        <div className="carousel-container">
          <button className="next-btn" onClick={nextHandler}>&gt;</button>
          <button className="prev-btn" onClick={prevHandler}>&lt;</button>
          <div className="card-container">
            <Card image='images/car1.png' name='Ambulance 1' price='$50' />
            <Card image='images/car2.png' name='Ambulance 2' price='$35' />
            <Card image='images/car3.png' name='Ambulance 3' price='$40' />
            <Card image='images/car4.png' name='Ambulance 4' price='$70' />
            <Card image='images/car1.png' name='Ambulance 1' price='$50' />
            <Card image='images/car2.png' name='Ambulance 2' price='$35' />
            <Card image='images/car3.png' name='Ambulance 3' price='$40' />
            <Card image='images/car4.png' name='Ambulance 4' price='$70' />
          </div>
        </div>

        <GreenButton className='confirm_btn' type="submit">Confirm</GreenButton>
      </form>
    </div>
  );
};

export default Selection;
