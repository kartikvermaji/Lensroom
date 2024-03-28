import React from 'react'
import im1 from "../assets/camman.png"
import im2 from "../assets/camman2.png"
import { motion } from 'framer-motion'

const Why = () => {
  return (
    <div className='h-[110vh] md:h-auto lg:h-[100vh]'>
      <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center px-5 md:mt-20'>

        <div>
        <motion.img
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay: 0, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }}
         src={im2} alt="" className='h-[60vh] lg:h-[80vh] absolute blur-sm mt-5 lg:mt-[-15vh]' />
        <motion.div
        initial={{ opacity: 0, scale:1,y:100 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y:0,
          transition: { delay:0.15, duration:.5 },
        }}
        viewport={{ once:true, amount: 0.5 }}
         className='bg-black relative lg:w-[45vw] md:w-[50vw] md:h-[50vh] w-[90vw] h-[55vh]  lg:h-[50vh] text-slate-50  lg:p-5 md:px-5 lg:px-14 mt-10 md:mt-auto'>
            <h1 className='font-[Poppins] lg:text-6xl text-3xl font-semibold w-[30vw] pt-6 pl-6 lg:pt-0 md:pl-0 md:mt-6'>WHY LENSROOM</h1>
            <p className='pl-6  lg:pt-0 md:pl-0 mt-2 lg:mt-4 w-[80vw] md:w-[40vw]  lg:w-[30vw]'>We have the right photographer for your next photoshoot.
Choose from our widespread network of photographers
that match your requirements perfectly.</p>
<button className='bg-slate-50 text-black lg:text-lg lg:mt-5 mt-2 ml-6 md:ml-auto px-3 py-1  lg:px-4 lg:py-2 font-semibold rounded-full '>EXPLORE NOW</button>
        </motion.div>
      

        </div>

        <div>
<motion.img
initial={{ opacity: 0, scale:1,y:100 }}
whileInView={{
  opacity: 1,
  scale: 1,
  y:0,
  transition: { delay: 0, duration:.5 },
}}
viewport={{ once:true, amount: 0.5 }}
 src={im1} alt="" className=' h-[40vh]  lg:h-[75vh]' />
        </div>



      </div>
    </div>
  )
}

export default Why
