import { useState } from "react";
import "./Home.scss";

import GreenButton from "../../Components/atoms/GreenButton/GreenButton";
import RedButton from "../../Components/atoms/RedButton/RedButton";
import Info from "../../Components/atoms/Info/Info";

const Home = () => {

  const [hide, toggle] = useState(true);

  const infoClickHandler = (e) => {
    toggle(!hide);
  }

  return (
    <div className="home-container">
      {/* navbar */}

      <div className="outer-container">
          <div className="left-container">
            <h1>
              We provide more than just transportation, we provide peace of mind.
            </h1>
            <p>
              From the moment the patient books with us, our team of professional
              drivers will take care of everything, from providing door-to-door
              service, to ensuring a comfortable and safe ride. We are committed to
              providing a high-quality service that is reliable, punctual and
              exceeds the expectations of our patients. We believe that every
              patient deserves the best, and we strive to provide that with our
              medical transportation services.
            </p>
            <GreenButton className="home-confirm-btn" href="/user">Get Started</GreenButton>
          </div>
          <div className="right-container">
            {/* illustration */}
            <img src="/images/ambulance.svg" alt="" className="home-illustration"/>
          </div>
      </div>

      <div className="info" onClick={infoClickHandler}>
        {hide ? null : <Info />}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </div>

      {/* <RedButton className="emergency-btn">EMERGENCY CALL</RedButton> */}
    </div>
  );
};

export default Home;
