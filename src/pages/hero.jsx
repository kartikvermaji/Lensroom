import React, { useRef } from 'react'
import herocam from "../assets/hero cam7.jpg"
import Navbar from '../components/Navbar'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useScroll } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  
    return (
    <div>
      <div className='bg-slate-900 h-[100vh]'id='home' >
          
        <motion.img
           style={{ scale }}
        
         src={herocam} alt="" className='h-[100vh] w-[100vw] object-cover absolute' />
    
     <div className='text-slate-50 relative text-center pt-40 md:pt-40 lg:pt-60'>
     <h1 className='md:text-6xl text-4xl font-semibold sans  p-3'>Your Partner in</h1>
     <h1 className='md:text-6xl text-4xl font-semibold sans p-3'>Devleloping Your Ideas</h1>
     <p className='md:text-xl text-lg p-2'>We will consult,analyze and find the best solutions so we<br/> can deliver you the perfect product!</p>
     <button className='md:text-xl font-semibold bg-slate-100 hover:bg-orange-500 hover:text-slate-50 duration-300 text-slate-800 md:px-5 px-3 py-1 md:py-2 rounded-full hover:shadow-xl hover:shadow-slate-500'>Book Online</button>
     <p className='md:text-3xl text-lg text-slate-100 font-extrabold mt-8 md:mt-16 '>|| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;| &nbsp;&nbsp;||&nbsp;&nbsp;||&nbsp;&nbsp;|</p>
     </div>
    </div>
    
    </div>
  )
}

export default Hero
