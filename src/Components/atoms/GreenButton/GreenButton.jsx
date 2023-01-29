import './GreenButton.scss';

const GreenButton = (props)=>{

    return(
        <div className="button-container">
            <button className='signup-btn' onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default GreenButton;