import React from 'react'

const LoginVerified = () => {
  return (
    <>
     <section className='bg-gray-50'>
     <div className='flex flex-col px-6 py-8 mx-auto md:h-screen  items-center'>
         <div className='flex flex-row my-4'>
           <a href="">
             <img className='w-8 h-8 mr-2' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo img"/>
           </a> 
           <h1 className='text-2xl font-semibold text-gray-900'>Logo</h1>
         </div>
         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   Your already sign in
               </h1>
               
           </div>
         </div>
       </div>
 
     </section>
    </>
  )
}

export default LoginVerified