import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";
import './App.scss'

import {Home, User, Confirmation, Selection, PhoneNav} from './Pages';
import Navbar from './Components/organisms/Navbar/Navbar';

function App() {

  const isPhone = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className="App">
      {(isPhone ? <PhoneNav /> : <Navbar />)}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/confirmation' element={<Confirmation />}></Route>
        <Route path='/selection' element={<Selection />}></Route>
      </Routes>
    </div>
  )
}

export default App
