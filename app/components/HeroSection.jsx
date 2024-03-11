"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from "next/link";


 

export const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'> 
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        ></motion.div>
         <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m {""} </span>
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Jitesh Bhandari',
        50000,
      ]}
      wrapper="span"
      speed={1}
      repeat={Infinity}
    />
         </h1>
         <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
         Enthusiastic coder with a passion for problem-solving and a love for clean code. Let&apos;s build something amazing!
        </p>

        <div>
        {/* <button onClick={() => { window.location.href = 'https://www.linkedin.com/in/jitbhand/'; }} className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white'>
    Hire Me
</button> */}

            <button onClick={() => {window.location.href = "https://drive.google.com/file/d/1wd_RFc6iEDezSU__z499XD0sc4Epy4qd/view?usp=sharing";}} className='block bg-[#925bea] hover:bg-slate-800 rounded-full px-5 py-2 px-1 py-1 w-full sm:w-fit rounded-full bg-transparent text-white mt-3'>
                {/* <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span> */}
                Download CV
                </button>
        </div>


         </div>
         <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src="/images/hero-image.png" 
            alt='Main image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            height={300}
            width={300}/>
            </div>

         </div>
         </motion.div>
         </div>
    </section>
  )
}
