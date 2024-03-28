import React from 'react'
import Hero from './hero'
import Moto from './Moto'
import Aboutus from './Aboutus'
import Services from './Services'
import Appp from './Appp'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Query from './Query'
import Testimonials from './Testimonials'
import Categories from './Categories'
import Why from './Why'



const Homepage = () => {
  return (
    <div className='bg-slate-950 font-[Poppins]'>
      <Hero/>
      <Why/>
      <Services/>
      <Aboutus/>
      <Moto/>
      <Categories/>
      <Testimonials/>
      <Appp/>
      <Query/>
      <Footer/>
      <Navbar/>
    </div>
  )
}

export default Homepage
