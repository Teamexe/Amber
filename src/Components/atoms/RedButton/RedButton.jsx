import './RedButton.scss';

const RedButton = (props)=>{

    return(
        <div className="button-container">
            <button className='emergency-btn' onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default RedButton;