import './Card.scss';

const Card = (props) => {
    let data;

    if(props.id==1) {
        data = {image: 'images/car1.png', name: "Ambulace 1", price: "$35"}
    }else if(props.id==2) {
        data = {image: 'images/car2.png', name: "Ambulace 2", price: "$69",}
    }else if(props.id==3){
        data = {image: 'images/car3.png', name: "Ambulace 3", price: "$420", }
    }

    return(
        <div className={`card ${props.className}`} onClick={props.onClick}>
            <img className="ambulance-image" src={data.image} alt="ambulance" />
            <div className="data">
                <h3 className="car-name">{data.name}</h3>
                <p className="price">{data.price}</p>
            </div>
        </div>
    )
}

export default Card;