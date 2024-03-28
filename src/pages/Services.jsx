import React from 'react'
import pg1 from "../assets/pg1.jpg"
import pg2 from "../assets/pg2.jpg"
import ps from "../assets/hero cam6.jpg"
import ppg from "../assets/ppg.jpg"
import ps2 from "../assets/ps2.jpg"
import { motion, useTransform, useViewportScroll } from "framer-motion";


const Services = () => {
  return (
    <div className='text-slate-50 lg:h-[80vh] md:h-[60vh] h-[130vh] md:mt-24 lg:mt-auto' id='services'>
      <div className=' flex flex-col justify-center items-center space-y-10 lg:space-y-20'>
        <motion.h1
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay: 0, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }}
         className='lg:text-6xl md:text-4xl text-3xl font-semibold'>OUR SERVICES</motion.h1>
        <div className='flex flex-col md:flex-row justify-around w-[80vw] space-y-5 md:space-y-0'>

          <motion.div
          initial={{ opacity: 0, scale:1,y:100 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:0,
            transition: { delay: 0, duration:.5 },
          }}
          viewport={{ once:true, amount: 0.5 }} className='flex flex-col justify-center items-center '>
            <img src={pg1} alt="" className='lg:h-[40vh] h-[25vh] rounded-full' />
            <p className='lg:text-4xl text-xl w-[40vw]  md:w-[20vw] items-center text-center'>INSTANT PHOTOGRAPHER</p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale:1,y:100 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:0,
            transition: { delay:0.30, duration:.5 },
          }}
          viewport={{ once:true, amount: 0.5 }} className='flex flex-col justify-center items-center '>
            <img src={pg2} alt="" className='lg:h-[40vh] h-[25vh] rounded-full' />
            <p className='lg:text-4xl text-xl w-[40vw]  md:w-[20vw] items-center text-center'>SCHEDULE PHOTOGRAPHER</p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale:1,y:100 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:0,
            transition: { delay:0.15, duration:.5 },
          }}
          viewport={{ once:true, amount: 0.5 }} className='flex flex-col justify-center items-center '>
            <img src={ppg} alt="" className='lg:h-[40vh] h-[25vh] rounded-full' />
            <p className='lg:text-4xl text-xl w-[40vw]  md:w-[18vw] items-center text-center'>PHOTO PRINTING</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
