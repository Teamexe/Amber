import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'

import {Home, User, Confirmation, Selection} from './Pages';
import Navbar from './Components/organisms/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
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
