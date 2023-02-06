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

    const CardSelectHandler = () => {
        
    };

    return(
        <div className={`card card-sub ${props.className}`} onClick={CardSelectHandler}>
            <img className="ambulance-image" src={props.image} alt="ambulance" />
            <div className="data">
                <h3 className="car-name">{props.name}</h3>
                <p className="price">{props.price}</p>
            </div>
        </div>
    )
}

export default Card;