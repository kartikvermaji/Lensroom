import React from "react";
import ps from "../assets/ps1.jpg";
import {
  faStarOfLife,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTransform, useViewportScroll, motion } from "framer-motion";

const Aboutus = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.8]);
  return (
    <div className="bg-slate-950 h-[100vh] items-center flex flex-col text-center">
      <div className="text-slate-50 w-[90vw] lg:w-[80vw] flex-nowrap flex flex-col md:flex-row md:space-x-0 lg:space-x-10 md:mt-20 mt-10 justify-around">
        <div className="flex ">
         <div>
         <motion.h1
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0, duration: 1 },
            }}
            viewport={{ once: true, amount: 0}}
            className="lg:text-9xl md:text-7xl  text-5xl text-left font-semibold"
          >
            The
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0, duration: 1 },
            }}
            viewport={{ once: true, amount: 0 }}
            className="lg:text-9xl md:text-7xl  text-5xl  text-left font-semibold"
          >
             Lens- 
      
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0, duration: 1 },
            }}
            viewport={{ once:true, amount: 0}}
            className= "lg:text-9xl md:text-7xl text-5xl  text-left font-semibold"
          >
           room's

          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0, duration: 1 },
            }}
            viewport={{ once:true, amount: 0 }}
            className=" lg:text-9xl md:text-7xl text-5xl   text-left font-semibold"
          >
            
            Services
          </motion.h1>
         </div>

          <div>
          <motion.img
          initial={{ opacity: 0, x:20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0, duration: 1 },
          }}
          viewport={{ once: true, amount: 0 }}
        
            src={ps}
            alt=""
            className="md:hidden h-[50vh] md:h-[75vh]  w-[] md:w-[15vw] mt-[-7vh] rounded-full object-cover shadow-2xl hover:shadow-slate-300 duration-200 shadow-slate-500"
          />
        </div>

        </div>



        <div className="mt-6 flex md:flex-col">

          <motion.div 
           initial={{ opacity: 0, y: 150 }}
           whileInView={{
             opacity: 1,
             y: 0,
             transition: { delay: 0, duration: 1 },
           }}
           viewport={{ once:true, amount: 0.5 }}
          className="text-left  md:ml-0">
            <FontAwesomeIcon
              icon={faStarOfLife}
              className="md:text-xl bg-orange-500 text-slate-950 rounded-full px-1 py-1 md:px-2 md:py-2  "
            />
            <p className="text-center pt-4 text-sm lg:text-lg w-24 md:w-40 lg:w-60 ">
              Our Plans are saving <br /> policyholders 30%-60% <br /> on
              premiums
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 1 },
          }}
          viewport={{ once:true, amount: 0.5 }}
           className="text-left md:pt-8 px-5 md">
            <FontAwesomeIcon
              icon={faStarOfLife}
              className="md:text-xl bg-orange-500 text-slate-950 rounded-full px-1 py-1  md:px-2 md:py-2  "
            />
            <p className="text-center text-sm lg:text-lg pt-4 w-24 md:w-40 lg:w-60 " >
              We offer a choice of low <br /> dedactibles and include <br /> no
              cost value-added <br />
              services{" "}
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 1 },
          }}
          viewport={{ once:true, amount: 0.5 }}
          >
            <FontAwesomeIcon
              icon={faArrowDownLong}
              className=" lg:text-5xl md:text-3xl font-extralight bg-orange-500 mt-10 text-slate-950 lg:px-5 px-4 rounded-full hover:shadow-xl hover:shadow-slate-400 hover:pt-24  duration-300  py-3 lg:py-3"
            />
          </motion.div>
        </div>

        <div>
          <motion.img
         initial={{ opacity: 0, scale:.5 }}
         whileInView={{
           opacity: 1,
           scale: 1,
           transition: { delay: 0.25, duration: 1 },
         }}
         viewport={{ once:true, amount: 0.5 }}
            src={ps}
            alt=""
            className="h-[75vh] hidden md:flex md:mt-[-8vh] lg:mt-0 w-[15vw] rounded-full object-cover shadow-2xl hover:shadow-slate-300 duration-200 shadow-slate-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
