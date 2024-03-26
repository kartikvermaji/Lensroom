import React, { useState } from 'react'
  import {
    faImage,faBars,faXmark
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import logo from "../assets/logo.jpg"

const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className=' flex justify-around items-center   '>
    <div className=' bg-slate-50 flex p-2 fixed top-0 justify-around text-center w-[100vw] md:w-[90vw] text-xl mt-4  md:mt-6 rounded-full text-black '>
      <div>
        <a href="#home"><img src={logo} alt="" className='lg:ml-28 md:ml-16 lg:ml- lg:h-12 h-8 ' /></a> 
      </div>

      <div className='lg:space-x-10 space-x-5 font-normal pt-1 md:block hidden text-sm md:pt-2 lg:text-xl'> 
        <a href="#home" className='hover:text-slate-400 duration-200'>Home</a>
        <a href="#services" className='hover:text-slate-400 duration-200'>Services</a>
        <a href="#" className='hover:text-slate-400 duration-200'>Categories</a> 
        <a href="#contact" className='hover:text-slate-400 duration-200'>Contact Us</a>
      </div>

      <div className='md:block hidden pt-1'>
        <button className='border-2 px-3 text-sm lg:text-xl  lg:px-5 py-1 rounded-full border-black hover:bg-black hover:text-slate-50  duration-200'>Book</button>
      </div>

      <div>
        <button className="md:hidden" onClick={()=>setOpen(true)} >
        <FontAwesomeIcon icon={faBars} />
        </button>
        {open && (<div className="">
            
            <div className="flex flex-col fixed top-[15vh] left-[20vw] z-999 p-10 text-xl text-center text-slate-700 bg-slate-200 rounded-lg">
            <div><button className="text-xl text-slate-800  hover:text-slate-400 hover:drop-shadow-xl sticky top-5"onClick={()=>{setOpen(!open)}} ><FontAwesomeIcon icon={faXmark} /></button></div>
        <a href="#home" className="p-3 hover:text-slate-400 hover:drop-shadow-xl">Home</a>
        <a href="#services"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Services</a>
        <a href="#skills"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Categories</a>
        <a href="#contact"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Contact Us</a>
        <a href="#experience"  className="p-3 hover:text-slate-400 mt-4 border-2 border-slate-700 rounded-full hover:drop-shadow-xl ">Book Online</a>
       

      </div>
        </div>)}
      </div>



    </div>
    </div>
  )
}

export default Navbar
