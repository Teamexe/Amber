import { Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'

import AuthContext from './context/auth-context';
import { useAuth } from './hooks/auth-hook';

import { Home, User, Confirmation, Selection } from './Pages';
import Navbar from './Components/organisms/Navbar/Navbar';

function App() {
  const { login, logout, token, userId } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <AuthContext.Provider value={{ token: token, userId: userId, login: login, logout: logout }}>
      <Routes>
          {token && <Route path="/user" element={<Navigate replace to="/selection" />} />}
          {!token && <Route path="/selection" element={<Navigate replace to="/" />} />}
          <Route path='/selection' element={<Selection />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/confirmation' element={<Confirmation />}></Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
