import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Componets/Header'
import Footer from './Componets/Footer'
import Hero from './Componets/Hero'
import Services from './Componets/Services'
import About from './Componets/About'
import Philosophy from './Componets/Philosophy'
import Commitment from './Componets/Commitment'
import Industries from './Componets/Industries'
import Testimonials from './Componets/Testimonials'
import Blogs from './Componets/Blogs'
import Contact from './Componets/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="philosophy">
          <Philosophy />
        </section>

        <section id="services">
          <Services />
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

      <Footer />
    </>
  )
}

export default App
