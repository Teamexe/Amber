import GreenButton from '../GreenButton/GreenButton';
import './SignInToggle.scss';

const SignInToggle = () => {
    const signInHandler = () => {
        window.location.assign("/user");    
    }

    return (
            <GreenButton href="/user">SignIn</GreenButton>
    )
}

export default SignInToggle;