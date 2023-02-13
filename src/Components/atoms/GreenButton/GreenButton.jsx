import './GreenButton.scss';

const GreenButton = (props)=>{

    return(
        <div className="button-container">
            <button className={`signup-btn ${props.className}`} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default GreenButton;