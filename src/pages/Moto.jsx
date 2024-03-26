import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import {
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Moto = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [.5, 1]);
  return (
    <div className='flex justify-center  bg-slate-950 h-[70vh] pb-[10vh]  md:h-[50vh] text-slate-50'>
       <motion.div 
      initial={{ opacity: 0, y:100 ,scale:1}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 1,scale:1. },
      }}
      viewport={{ once: true, amount: 0}}
      className="flex justify-around flex-col md:flex-row mt-[-4vh] md:space-x-20 lg:mt-10 md:mt-0 w-[80vw] ">
        <h1 className="lg:text-7xl md:text-5xl text-3xl mt-16 md:mt-8 lg:mt-0 text-center md:text-left font-lightbold "> We capture the magic of your memories</h1>
        <div className="md:w-[50vw] justify-center items-center">
        <p className="font-semibold md:text-sm text-sm text-center ml-[-4vw] w-[90vw] md:text-left  md:w-[44vw] mt-0 md:mt-10" >Discover the magic at photobooth, where every moment is a memory worth capturing. Our skilled photographers are dedicated to preserving your special occasions with creativity and passion. Let us transform your fleeting moments into everlasting memories</p>
          <button className="md:text-xl ml-[15vw] md:ml-[0vw]  mt-5 lg:mt-10 md:mt-5 border-2 px-8 py-2 rounded-full font-extralight hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-400 hover:border-slate-50 hover:text-slate-950 duration-200">Get Started <FontAwesomeIcon icon={faArrowRight} className="bg-orange-500 rounded-full px-2 mt-[-0.3rem] rotate-[-20deg]  ml-[1rem] text-xl py-2 absolute hover:shadow-xl hover:shadow-slate-400" /></button>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Moto
