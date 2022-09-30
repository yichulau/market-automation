import React from 'react'
import AdminLayout from '../../../components/admin/Layout/AdminLayout'

const Profile = () => {
   
  return (
    <>
    <AdminLayout>
        <div className='flex flex-col w-full'>
            <div className='flex flex-row my-2 w-full'>
                <h2 className='text-2xl text-gray-700 font-bold'>user Profile</h2>
                <div className='items-center mx-2 justify-center text-2xl text-gray-400'>|</div>
                <h3 className='text-sm text-blue-600' style={{lineHeight:'2.1rem'}}>Your profile</h3>
            </div>
            <div className='flex flex-col md:flex-row mt-2 w-full'>
                <div className='bg-white rounded-lg shadow-sm w-full md:w-2/5 h-96 mr-4 p-4 mb-4 md:mb-0 '>
                    <div className='flex items-center mb-2'>
                        <img className="w-20 h-20 rounded-full" src="/assets/icons/land1.png" alt="someimg"/>
                        <h3 className='mx-2'>Adam Silver</h3>
                    </div>
                    <div className='flex items-center mb-2 bg-blue-700 p-2 rounded-lg '>
                        <div className='h-8 w-8'>
                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                        </div>
                        <h3 className='mx-2 text-sm text-white'>Account</h3>
                    </div>
                    <div className='flex items-center mb-2 bg-white p-2 rounded-lg '>
                        <div className='h-8 w-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                        </div>
                        <h3 className='mx-2 text-sm'>Notification</h3>
                    </div>
                    <div className='flex items-center mb-2 bg-white p-2 rounded-lg '>
                        <div className='h-8 w-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                        </div>
                        <h3 className='mx-2 text-sm'>Settings</h3>
                    </div>
                </div>
                <div className='p-6 rounded-lg shadow-sm w-full md:w-3/5 bg-white'>
                    <div className='flex flex-row flex-row justify-between items-center'>
                        <div className='infline-flex'>
                            <h2 className='text-lg text-gray-700'>Account Settings</h2>
                        </div>
                        <div className='inline-flex'>
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex flex-col items-left'>
                        <div className='infline-flex'>
                            <h2 className='text-lg text-gray-700'>Avatar</h2>
                        </div>
                        <div className='infline-flex'>
                            <img className="w-20 h-20 rounded-lg" src="/assets/icons/land1.png" alt="someimg"/>
                        </div>
                    </div>
                    <hr className='my-2'/>
                    <div>
                        <form>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
                            </div>
                            <div className="mb-6">
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                <input  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className="mb-6">
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                <input  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className="mb-6">
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                <input  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
    </>
  )
}

export default Profile