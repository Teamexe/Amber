import { useState } from "react";
import "./User.scss";

const User = () => {
  const [signIn, toggle] = useState(true);

  return (
    <div className="user-container">
      <div className="user-inner-container">
        
          <div className="signup-container" style={...signIn !== true ? `transform: translateX(100%); opacity: 1; z-index: 5;` : null}>
            <form>
              <h1 className="title">Create Account</h1>
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="password" placeholder="Password" />
              <input type="submit" value="SignUp" className="submit" />
            </form>
          </div>

          <div className="signin-container" style={...signIn !== true ? `transform: translateX(100%);` : null}>
            <form>
              <h1 className="title">Sign in</h1>
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <input type="submit" value="SignIn" className="submit" />
            </form>
           </div>

            <div className="overlay-container" style={...signIn !== true ? `transform: translateX(-100%);` : null}>
                <div className="overlay" style={...signIn !== true ? `transform: translateX(50%);` : null}>
                    <div className="left-overlay panel" style={...signIn !== true ? `transform: translateX(0);` : null}>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost-btn" onClick={() => toggle(true)}>Sign In</button>
                    </div>
                    <div className="right-overlay panel" style={...signIn !== true ? `transform: translateX(20%);` : null}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter Your personal details and start journey with us</p>
                        <button className="ghost-btn" onClick={() => toggle(true)}>Sign Up</button>
                    </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default User;
