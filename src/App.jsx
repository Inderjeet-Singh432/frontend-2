import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Componets/Contact'
import Master from './Componets/Master'
import About from './Componets/About'
import SignUp from './Componets/SignUp'
import Hotels from './Componets/Hotel'
import Gallery from './Componets/Gallery'
import OwnerDashboard from './Owner/OwnerDashboard'
import LoginPage from './Componets/SignIn'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
              <Route path='/' element={<Hotels/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/signin' element={<LoginPage/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/gallery' element={<Gallery/>}></Route>
              <Route path='/owner' element={<OwnerDashboard/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
