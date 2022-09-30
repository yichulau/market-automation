import React from 'react'

type ValueCardsProps = {
    value: string;
    category: string;
}

const ValueCards = ({value, category}: ValueCardsProps) => {
  return (
   <>
    <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
        <div className='flex flex-row gap-4'>
            <h2 className='text-lg font-bold'>{value}</h2>
            <div className='w-8 h-8'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            </div>
        </div>
        <h4 className='text-gray-600 text-sm'>{category}</h4>
    </div>
   </>
  )
}

export default ValueCards