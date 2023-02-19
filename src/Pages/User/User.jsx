import { useState } from "react";
import "./User.scss";

const User = () => {
  const [signIn, toggle] = useState(true);

  const clickHandler = () => {
    toggle(!signIn);
  }

  return (
    <div className="user-container">
      <div className={`user-inner-container ${signIn ? "" : "deactive"}`}>
        
          <div className="signup-container">
            <form>
              <h1 className="title">Create Account</h1>
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="password" placeholder="Password" />
              <input type="submit" value="SignUp" className="submit" />
            </form>
          </div>

          <div className="signin-container">
            <form>
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
