import './Navbar.scss';

import { useContext } from 'react';

import Menu from '../../atoms/Menu/Menu';
import CurrentLocation from '../../molecules/CurrentLocation/CurrentLocation';
import GreenButton from '../../atoms/GreenButton/GreenButton';
import { useAuth } from '../../../hooks/auth-hook';
import AuthContext from '../../../context/auth-context';

const Navbar = () => {
    const { token } = useAuth();
    const auth = useContext(AuthContext);

    const ProfileHandler = () => {

    }

    const logoutHandler = () => {
        localStorage.removeItem('userData');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            {/* brand */}
                <div className="brand">
                    <img src="amber.svg" className="logo" alt="AMBER" />
                    <h1>AMBER</h1>
                </div>
                {/* location */}
                <CurrentLocation />
                {/* profile */}
                <span className="profile" onClick={ProfileHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </span>
                {token && <GreenButton onClick={logoutHandler}>LOGOUT</GreenButton>}
        </nav>
    )
}

export default Navbar;