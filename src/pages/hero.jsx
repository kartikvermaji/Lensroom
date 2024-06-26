import React, { useRef } from 'react'
import herocam from "../assets/heroimg.jpg"
import logo from "../assets/Lensroom-1.png"
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Navbar from "../components/Navbar"

const Hero = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  
    return (
    <div>
      <div className='bg-slate-50 h-[100vh]'id='home' >
          
        <motion.img
           style={{ scale }}
         src={herocam} alt="" className='h-[100vh] w-[100vw] object-cover absolute' />
    
     <div className='text-slate-50 flex flex-col  relative text-center items-center pt-40 md:pt-40 lg:pt-54'>
      <motion.img
      initial={{ opacity: 0,y:100 }}
      whileInView={{
        opacity: 1,
        y:0,
        transition: { delay: 0, duration:1 },
      }}
      viewport={{ once:true, amount: 0.5 }}
       src={logo} alt="" className='h-[5vh] md:h-[10vh] mt-10 ' />
     <motion.p
     initial={{ opacity: 0,y:100 }}
     whileInView={{
       opacity: 1,
       y:0,
       transition: { delay: 0.15, duration:1 },
     }}
     viewport={{ once:true, amount: 0.5 }}
      className='md:text-4xl text-lg p-2  mt-5 font-extralight tracking-wide font-[Poppins]'>NEXT-GENERATION PHOTOGRAPHY SERVICE</motion.p>
     <motion.button
     initial={{ opacity: 0,y:100 }}
     whileInView={{
       opacity: 1,
       y:0,
       transition: { delay: 0.25, duration:.75 },
     }}
     viewport={{ once:true, amount: 0.5 }}
      className='md:text-xl font-semibold bg-slate-100 mt-5  md:mt-10 hover:bg-slate-950 hover:text-slate-50 duration-300 text-slate-800 md:px-5 px-3 py-1 md:py-2 rounded-full hover:shadow-2xl hover:shadow-slate-50'>Book Online</motion.button>
    
     </div>
    </div>
    <Navbar/>
    </div>
  )
}

export default Hero
