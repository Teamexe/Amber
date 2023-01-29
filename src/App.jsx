import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'

import {Home, User} from './Pages';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/user' element={<User />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
