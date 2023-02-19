import React from 'react';
import './Confirmation.scss';

import Payment from '../../Components/organisms/Payment/Payment';

const Confirmation = () => {
    // let height = document.querySelector(".payment-container").clientHeight;
    // console.log(height);

    return(
        <React.Fragment>
            <div className="confirmation-container">
                <div className="left">
                    {/* <img src="images/car1.png" alt="" /> */}
                </div>
                <div className="right">
                    <h2 className='car-details'>Car Details</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur, consectetur sunt veritatis officiis iste quo quasi autem explicabo voluptates.</p>
                    <h2 className='pickup'>
                        Pickup Location
                        <span>Lorem ipsum dolor, sit amet consectetur</span>
                    </h2>
                </div>
            </div>
            <Payment />
        </React.Fragment>
    )
}

export default Confirmation;