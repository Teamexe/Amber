import React from 'react';
import './Confirmation.scss';

import Payment from '../../Components/organisms/Payment/Payment';
import Card from '../../Components/molecules/Card/Card';

const Confirmation = (props) => {
    // let height = document.querySelector(".payment-container").clientHeight;
    // console.log(height);
    console.log(props.state);
    return(
        <React.Fragment>
            <div className="confirmation-container">
                <div className="left">
                    <Card image ='images/car1.png'  name = "Ambulace 1" price = "$35" className="confirmation-card"/>
                </div>
                <div className="right">
                    <h2 className='car-details'>Car Details</h2>
                    <p>Compact medical van with ample storage and seating for patients and medical staff. 
                       This van is equipped with medical-grade oxygen tanks, stretchers, and other emergency equipment.
                    </p>
                    <h2 className='pickup'>
                        Pickup Location
                        <span>Vista Apartments, Saket, Delhi</span>
                    </h2>
                </div>
            </div>
            <Payment/>
        </React.Fragment>
    )
}

export default Confirmation;