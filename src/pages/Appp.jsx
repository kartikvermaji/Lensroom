import React from 'react'
import p1 from "../assets/phone.jpg"
import p2 from "../assets/phone2.jpg"

const Appp = () => {
  return (
    <div className='md:h-[100vh] bg-slate-950 text-slate-50'>
      <div className='flex justify-center flex-col md:flex-row space-x-20 items-center'>

        <div>
          <div className='h-[55vh] w-[90vw] lg:h-[70vh] md:h-[60vh] md:w-[45vw] lg:w-[30vw] bg-slate-50 hover:bg-slate-500 hover:shadow-xl hover:shadow-slate-700 rounded-3xl '>
<img src={p2} alt="" className='h-[35vh] lg:h-[50vh] md:h-[40vh] rounded-xl lg:rounded-3xl md:rounded-xl absolute mt-28 lg:mt-32 ml-40 md:ml-48 lg:ml-60 rotate-[10deg]  ' />
<img src={p1} alt="" className='h-[40vh] lg:h-[60vh] md:h-[50vh] rounded-xl lg:rounded-[2rem] md:rounded-xl absolute mt-20 md:mt-12 lg:mt-16 ml-16 lg:ml-20 rotate-[-10deg]' />          
          </div>
        </div>

        <div className='lg:w-[25vw] md:w-[45vw] w-[90vw] mt-5 md:mt-0 '>
            <h1 className=' lg:text-xl font-extrabold text-slate-600'>ABOUT APP</h1>
            <h1 className='lg:text-5xl w-[75vw] md:w-[38vw] lg:w-auto text-3xl'>Stay organized and increase productivity</h1>
            <p className='text-slate-300 mt-8 w-[75vw] md:w-[35vw] lg:w-auto'>Our Task manager allows you to stay on top of your deadlines, reducing stress and ensuring that you have an clear pictures of your progress.Message system and task assignment feauteres make it easy to collaborate with your team,ensuring that everyone is on the same page and working  towards tha same goal</p>
            <button className='lg:text-xl px-4 py-2 bg-slate-50 text-slate-950 rounded-2xl hover:bg-slate-600 hover:text-slate-50 duration-200 hover:shadow-lg hover:shadow-slate-600 mt-4 lg:mt-8'>Try for Free</button>
        </div>
      </div>
    </div>
  )
}

export default Appp
