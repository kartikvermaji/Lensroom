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
import Serv from './Serv'
import Nav2 from '../components/Nav2'




const Homepage = () => {
  return (
    <div className='bg-slate-50 font-[Poppins]'>
      <Hero/>
      <div>
        
      </div>
      <Why/>
      <Services/>    
      <Moto/>
      <Categories/>
      <Query/>
      <Footer/>
      <Nav2/>
    </div>
  )
}

export default Homepage
