import React from 'react'
import LandingCards from './LandingCards'
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
        <section className='bg-gray-50'>
            <div className='flex flex-col lg:flex-row p-14 mx-auto md:h-screen '>
                <div className='flex flex-col w-full lg:w-1/2'>
                    <h2 className='text-3xl mb-8 text-black font-bold'>Welcome to the  <span className='text-blue-600'>Social Marketer</span></h2>
                    <div className='mt-4 w-full lg:w-3/4'>
                        <LandingCards iconImg='/assets/icons/automation.png' />
                    </div>
                    <div className='mt-4 w-full lg:w-3/4'>
                        <LandingCards iconImg='/assets/icons/deep-learning.png' />
                    </div>
                    <div className='mt-4 w-full lg:w-3/4'>
                        <LandingCards iconImg='/assets/icons/brain-computer-interface.png' />
                    </div>
                </div>
                <div className='w-full mt-96 lg:mt-0 lg:w-1/2'>
                    <div className='relative w-full h-full'>
                    
                        <motion.div 
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        className='absolute w-full -top-24 z-40'>
                            <img src="/assets/icons/land2.png"/>
                        </motion.div>
                        <motion.div 
                          whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        className='absolute w-full top-1/10 right-1/4'>
                            <img src="/assets/icons/land3.png"/>
                        </motion.div>
                        <motion.div 
                          whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        className='absolute w-full top-1/4 z-50'>
                            <img src="/assets/icons/land1.png"/>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default LandingPage