import React from 'react'
import { motion } from 'framer-motion';

const LandingCards = ({iconImg} : any) => {
  return (
    <>
        <motion.div 
         whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
        }}
        className='flex flex-row items-left p-4 rounded-lg shadow-md bg-gradient-to-r bg-white'>
            <div className='flex ml-2 mr-4 w-4 lg:w-12'>
                <img className='w-auto' src={iconImg} alt="some icon"/>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-xs text-black-800 font-bold'> Products</h2>
                <p className='text-xs text-gray-500'>Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum </p>
            </div>
        </motion.div>
    </>
  )
}

export default LandingCards