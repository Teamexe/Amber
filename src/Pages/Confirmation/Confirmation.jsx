import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.scss';

import Payment from '../../Components/organisms/Payment/Payment';
import Card from '../../Components/molecules/Card/Card';

const Confirmation = (props) => {
    const location = useLocation();
    let confirmationImage;
    if(location.state.id==1){
        confirmationImage = "images/car1.png"
    } else if (location.state.id==2) {
        confirmationImage = "images/car2.png"
    } else {
        confirmationImage = "images/car3.png"
    }
    return(
        <React.Fragment>
            <div className="confirmation-container">
                <div className="left">
                    <Card image ={confirmationImage}  name = "Ambulance" price = "$35" className="confirmation-card"/>
                </div>
                <div className="right">
                    <h2 className='car-details'>Car Details</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur, consectetur sunt veritatis officiis iste quo quasi autem explicabo voluptates.</p>
                    <h2 className='pickup'>
                        Pickup Location
                        <span>{location.state.address}</span>
                    </h2>
                </div>
            </div>
            <Payment/>
        </React.Fragment>
    )
}

export default Confirmation;