import React from 'react'

const LandingCards = ({iconImg} : any) => {
  return (
    <>
        <div className='flex flex-row items-left p-4 rounded-lg shadow-md bg-gradient-to-r from-[#ffffff] to-[#8BC6EC]'>
            <div className='flex ml-2 mr-4'>
                <img className='w-12' src={iconImg} alt="some icon"/>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-xs text-black-800 font-bold'> Products</h2>
                <p className='text-xs text-white'>Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum </p>
            </div>
        </div>
    </>
  )
}

export default LandingCards