import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Componets/Contact'
import Master from './Componets/Master'
import Body from './Componets/Body'
import About from './Componets/About'
import SignUp from './Componets/SignUp'
import Login from './Componets/SignIn'
import Hotels from './Componets/Hotel'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
              <Route path='/' element={<Body/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/signin' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/hotels' element={<Hotels/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
