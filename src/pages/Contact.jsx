import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Query from './Query'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      {/* <div>
        <h1>Get In Touch</h1>
        <p>Ready  to help your company scale faster?Let's chat how we can help</p>

        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div> */}
      <Query/>
      <Footer/>
    </div>
  )
}

export default Contact
