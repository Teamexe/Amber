import { Route, Routes, Navigate } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";

import AuthContext from './context/auth-context';
import { useAuth } from './hooks/auth-hook';

import { Home, User, About, Confirmation, Selection, PhoneNav, PhoneUser } from './Pages';
import Navbar from './Components/organisms/Navbar/Navbar';

function App() {

  const isPhone = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const { login, logout, token, userId } = useAuth();

  return (
    <div className="App">
      {(isPhone ? <PhoneNav /> : <Navbar />)}
      <AuthContext.Provider value={{ token: token, userId: userId, login: login, logout: logout }}>
          <Routes>
            {token && <Route path="/user" element={<Navigate replace to="/selection" />} />}
            {!token && <Route path="/selection" element={<Navigate replace to="/" />} />}
            {/* {!token && <Route path="/confirmation" element={<Navigate replace to="/" />} />} */}
            <Route path='/selection' element={<Selection />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/user' element={(isPhone ? <PhoneUser /> : <User />)}></Route>
            <Route path='/confirmation' element={<Confirmation />}></Route>
          </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
