import { useState } from "react";
import "./Selection.scss";

import Pickup from "../../Components/molecules/Pickup/Pickup";
import Card from "../../Components/molecules/Card/Card";

const data = [
  {id: 1, image: 'images/car1.png', name: "Ambulace 1", price: "$35",},
  {id: 2, image: 'images/car2.png', name: "Ambulace 2", price: "$69",},
  {id: 3, image: 'images/car3.png', name: "Ambulace 3", price: "$420",},
];

const Selection = () => {

  const [selectedId, setSelectedId] = useState(0);

  // let box = document.querySelector('.card-container');
  // const nextHandler = () => {
  //   let boxSize = box.clientWidth;
  //   box.scrollLeft += boxSize;
  //   console.log(`boxSize: ${boxSize}`);
  // }

  // const prevHandler = () => {
  //   let boxSize = box.clientWidth;
  //   box.scrollLeft -= boxSize;
  //   console.log(`boxSize: ${boxSize}`);
  // }

  return (
    <div className="selection-container">
      <h2>SELECT</h2>
      {/* carousel */}
      <div className="carousel-container">
        {/* <button className="next-btn" onClick={nextHandler}>&gt;</button>
        <button className="prev-btn" onClick={prevHandler}>&lt;</button> */}
        <div className="card-container">
          {data.map(card => 
            <Card key={card.id} onClick={()=> setSelectedId(card.id)} image={card.image} name={card.name} price={card.price} className={selectedId == card.id ? 'active' : null}/>
          )}
        </div>
      </div>

      {/* pickup location  */}
      <Pickup />
      {/* <GreenButton className='confirm_btn'>Confirm</GreenButton> */}
    </div>
  );
};

export default Selection;
