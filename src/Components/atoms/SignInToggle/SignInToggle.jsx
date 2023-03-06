import './SignInToggle.scss';

const SignInToggle = () => {

    return (
        <div className="toggle-container">
            <span className='signin'>Signin</span>
            <span className='signup'>Signup</span>
            <span className='active'></span>
        </div>
    )
}

export default SignInToggle;