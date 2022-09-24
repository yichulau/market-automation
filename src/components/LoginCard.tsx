import React from 'react'
import LoginButton from './buttons/loginButton'


const LoginCard = () => {
  return (
    <>
    <section className='bg-gray-50'>
     <div className='flex flex-col px-6 py-8 mx-auto md:h-screen justify-center items-center'>
         <div className='flex flex-row my-4'>
           <a href="">
             <img className='w-8 h-8 mr-2' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo img"/>
           </a> 
           <h1 className='text-2xl font-semibold text-gray-900'>Logo</h1>
         </div>
         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   Sign in to your account
               </h1>
               <form className="space-y-4 md:space-y-6" action="#">
                   <div>
                       <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                       <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                   </div>
                   <div>
                       <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                   </div>
                   <div className="flex items-center justify-between">
                       <div className="flex items-start">
                           <div className="flex items-center h-5">
                             <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                           </div>
                           <div className="ml-3 text-sm">
                             <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                           </div>
                       </div>
                       <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                   </div>
                   <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                   <div className='flex flex-row'>
                      <LoginButton />
                   </div>
                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                       Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                   </p>
               </form>
           </div>
         </div>
       </div>
 
     </section>
    </>
  )
}

export default LoginCard