import { useState, useEffect, useContext } from "react";
import "./Navbar.scss";

import CurrentLocation from "../../molecules/CurrentLocation/CurrentLocation";
import SignInToggle from "../../atoms/SignInToggle/SignInToggle";

import GreenButton from '../../atoms/GreenButton/GreenButton';
import { useAuth } from '../../../hooks/auth-hook';
import AuthContext from '../../../context/auth-context';

const Navbar = () => {
  // const [isSignIn, setIsSignIn] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
    const { token } = useAuth();
    const auth = useContext(AuthContext);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

    const logoutHandler = () => {
        localStorage.removeItem('userData');
        window.location.reload();
    };

  const Menu = () => {
    return (
      <div className="menu-container">
        <div className="icon-container">
          <span className="profile-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <span className="cross" onClick={closeHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        </div>
        <a id="home" className="menu-item" href="/"> Home </a>
        <a id="about" className="menu-item" href="/about"> About </a>
        <a id="select-car" className="menu-item" href="/selection"> Selection </a>
        <p className="logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
          <span onClick={logoutHandler}>Log Out</span>
        </p>
      </div>
    )
  };


  const handleClick = () => {
    window.location.assign('/');
  };

  return (
    <nav className="navbar">
      {/* brand */}
        <div className="brand" onClick={handleClick}>
          <img src="amber.svg" className="logo" alt="AMBER" />
          <h1>AMBER</h1>
        </div>

      {/* location */}
      <CurrentLocation />

      {/* profile */}
      {!token ? (
        <SignInToggle />
      ) : (
        <span className="profile" onClick={openHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
      )}

      {!isOpen ? null : <Menu />}
    </nav>
  );
};

export default Navbar;
