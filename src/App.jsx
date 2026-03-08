import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Componets/Contact'
import Master from './Componets/Master'
import Body from './Componets/Body'

function App() {
  return (
    <>
      {/* <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="philosophy">
          <Philosophy />
        </section>

        <section id="commitment">
          <Commitment />
        </section>

        <section id="industries">
          <Industries />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="blogs">
          <Blogs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer /> */}


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
              <Route path='/' element={<Body/>}></Route>
              <Route path='contact/' element={<Contact/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
