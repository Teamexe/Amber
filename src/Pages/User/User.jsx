import { useState, useContext } from "react";
import AuthContext from "../../context/auth-context";

import { useHttpClient } from '../../hooks/http-hook';

import "./User.scss";

const User = () => {
  const { sendRequest } = useHttpClient();
  const [signIn, toggle] = useState(true);

  const auth = useContext(AuthContext);

  const clickHandler = () => {
    toggle(!signIn);
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (signIn) {
      try {
        const responseData = await sendRequest("http://localhost:3001/login",
          'POST',
          JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        )
        if (responseData.token) {
          auth.login(
            responseData.userId,
            responseData.token
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
    else {
      try {
        const responseData = await sendRequest("http://localhost:3001/signup",
          'POST',
          JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        )
        if (responseData.token) {
          auth.login(
            responseData._id,
            responseData.token
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="user-container">
      <div className={`user-inner-container ${signIn ? "" : "deactive"}`}>

        <div className="signup-container">
          <form onSubmit={formSubmitHandler}>
            <h1 className="title">Create Account</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <input type="submit" value="SignUp" className="submit" />
          </form>
        </div>

        <div className="signin-container">
          <form onSubmit={formSubmitHandler}>
            <h1 className="title">Sign in</h1>
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <input type="submit" value="SignIn" className="submit" />
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="left-overlay panel">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost-btn" onClick={clickHandler}>Sign In</button>
            </div>
            <div className="right-overlay panel">
              <h1>Hello, Friend!</h1>
              <p>Enter Your personal details and start journey with us</p>
              <button className="ghost-btn" onClick={clickHandler}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default User;
