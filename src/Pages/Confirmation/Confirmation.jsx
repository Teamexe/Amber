import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.scss';

import Payment from '../../Components/organisms/Payment/Payment';
import Card from '../../Components/molecules/Card/Card';
import GreenButton from '../../Components/atoms/GreenButton/GreenButton';

const Confirmation = (props) => {
    let description;

    const location = useLocation();
    let confirmationImage;
    if(location.state.id==1){
        description = 'Spacious ambulance van that provides a comfortable ride for patients and accommodates medical equipment and personnel.'
    } else if (location.state.id==2) {
        description = 'Compact yet spacious ambulance with a powerful engine and low maintenance cost.'
    } else {
        description = 'Sturdy and reliable ambulance with a high ground clearance and ample space for medical equipment and personnel.'
    }

    return(
        <React.Fragment>
            <div className="confirmation-container">
                <div className="left">
                    <Card id={location.state.id} className="confirmation-card"/>
                </div>
                <div className="right">
                    {/* <h2 className='car-details'>Car Details</h2>
                    <p>
                        {description}
                    </p> */}
                    <h2>Arriving In</h2>
                    <p>time</p>
                    <h2 className='pickup'>
                        Pickup Location
                        <span>{location.state.address}</span>
                    </h2>
                </div>
            </div>
            <GreenButton>Confirm</GreenButton>
            {/* <Payment/> */}
        </React.Fragment>
    )
}

export default Confirmation;