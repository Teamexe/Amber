import { Route, Routes, Navigate } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";

import useScript from './hooks/use-script';

import AuthContext from './context/auth-context';
import { useAuth } from './hooks/auth-hook';
import dotenv from 'dotenv';

import { Home, User, Confirmation, Selection, PhoneNav } from './Pages';
import Navbar from './Components/organisms/Navbar/Navbar';
    
function App() {
  const apiKey="AIzaSyBhdMIb5yVHLJ4A78Ncao9JC_dHJC0zeB8";
  const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
  useScript(scriptUrl);

  const isPhone = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const { login, logout, token, userId } = useAuth();

  return (
    <>
      <div className="App">
        {(isPhone ? <PhoneNav /> : <Navbar />)}
        <AuthContext.Provider value={{ token: token, userId: userId, login: login, logout: logout }}>
          <Routes>
            {token && <Route path="/user" element={<Navigate replace to="/selection" />} />}
            {!token && <Route path="/selection" element={<Navigate replace to="/" />} />}
            {!token && <Route path="/confirmation" element={<Navigate replace to="/" />} />}
            <Route path='/selection' element={<Selection />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/user' element={<User />}></Route>
            <Route path='/confirmation' element={<Confirmation />}></Route>
          </Routes>
        </AuthContext.Provider>
      </div>
    </>
  )
}

export default App
