import { useState } from 'react';
import './Navbar.scss';

import CurrentLocation from '../../molecules/CurrentLocation/CurrentLocation';
import SignInToggle from '../../atoms/SignInToggle/SignInToggle';

const Navbar = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    const ProfileHandler = () => {

    }

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
                {!isSignIn ? <SignInToggle /> :
                    <span className="profile" onClick={ProfileHandler}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                }
                
        </nav>
    )
}

export default Navbar;