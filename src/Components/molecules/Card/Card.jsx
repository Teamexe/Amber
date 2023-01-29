import './Card.scss';
import GreenButton from '../../atoms/GreenButton/GreenButton';

/* required props :
     image 
     name
     price
     driverName
     numberPlate
     arrivalTime
*/

const Card = (props) => {

    return(
        <div className={`card card-sub ${props.className}`}>
            <img className="ambulance-image" src={props.image} alt="ambulance" />
            <div className="data">
                <h3 className="car-name">{props.name}</h3>
                <p className="price">{props.price}</p>
            </div>
                <div className="details">
                    <span className="driver-logo  logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </span>
                    <span className="driver-name text">{props.driverName}</span>
                    <br />
                    <span className="number-plate-logo logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                    </span>
                    <span className="number-plate text">{props.numberPlate}</span>
                    <br />
                    <span className="clock-logo logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </span>
                    <span className="arriving-time text">{props.arrivalTime}</span>
                </div>
            <GreenButton className="select-btn">SELECT</GreenButton>
        </div>
    )
}

export default Card;