import { useState, useContext } from 'react';
import AuthContext from "../../context/auth-context";
import { useHttpClient } from '../../hooks/http-hook';

import './PhoneUser.scss';

import GreenButton from '../../Components/atoms/GreenButton/GreenButton';

const PhoneUser = () => {
    const { sendRequest } = useHttpClient();

    const [isUser, setIsUser] = useState(false);

    const auth = useContext(AuthContext);


    const formSubmitHandler = async (e) => {
        e.preventDefault();
    
        if (isUser) {
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
        <div className="outer-phoneUser-container">
            {isUser ? 
        (
            <div className='phone-user-container'>
                <h1>Login</h1>
                <form onSubmit={formSubmitHandler}>
                <div className="input-group email">
                    <input type="text" id="email"required className="input" />
                    <label for="email" className="input-label">E-mail</label>
                </div>
                <div className="input-group password">
                    <input type="password" id="password"required className="input" />
                    <label for="password" className="input-label">Password</label>
                </div>
                <div>
                   <a className="signup_prompt" onClick={()=>setIsUser(false)}>new user ?</a>
                </div>
                <GreenButton type='submit' className='btn'>Login</GreenButton>
                </form>    
            </div>
          )
          : 
          (
            <div className='phone-user-container'>
                <h1>SignUp</h1>
                <form onSubmit={formSubmitHandler}>
                <div className="input-group name">
                    <input type="text" id="name"required className="input" />
                    <label for="name" className="input-label">Name</label>
                </div>
                <div className="input-group email">
                    <input type="text" id="email"required className="input" />
                    <label for="email" className="input-label">E-mail</label>
                </div>
                <div className="input-group password">
                    <input type="password" id="password"required className="input" />
                    <label for="password" className="input-label">Password</label>
                </div>
                <div>
                   <a className="signup_prompt" onClick={()=>setIsUser(true)}>already a user ?</a>
                </div>
                <GreenButton type='submit' className='btn'>SignUp</GreenButton>
                </form>    
            </div>
          )}
        </div>
    )
  
}

export default PhoneUser;
// change its css !!!!!!!