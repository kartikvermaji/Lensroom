import React, { useState } from 'react'
import {faImage,faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/lensroom logo black.png"

const Nav2 = () => {
  return (
    <div>
      <div className='flex justify-between lg:py-1 px-2 md:px-16 items-center fixed top-0 bg-slate-50 w-[100vw]'>
<div><img src={logo} alt="" className='h-14  md:h-20' /></div>
<div className='lg:text-2xl md:text-xl text-sm space-x-2 md:space-x-10 lg:space-x-28 items-center justify-center text-gray-900'>
    <a href="#about" className='hover:text-gray-600 duration-200'>ABOUT</a>
    <a href="#services">SERVICES</a>
    <a href="#about">COMMUNITY</a>
</div>
      </div>
    </div>
  )
}

export default Nav2
