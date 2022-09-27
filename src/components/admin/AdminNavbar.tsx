import React, { useCallback, useState } from 'react'

declare module 'react' {
   interface HTMLAttributes<T> {
      tabindex?:any;
     
  }

}

const AdminNavbar = (props :any) => {
   const [showSideBar, setShowSidebar] = useState(false);
  
   const toggleSidebarMobile = () => {
      setShowSidebar(showSideBar => !showSideBar);
      props.setValue(showSideBar);
   };
  return (
    <>
      <nav className="bg-white border-b border-gray-200 z-30 w-full">
         <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
               <div className="flex items-center justify-start">
                  <button id="toggleSidebarMobile" onClick={toggleSidebarMobile} aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                     <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                     </svg>
                     <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                     </svg>
                  </button>
                  <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                  <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo"/>
                  <span className="self-center whitespace-nowrap">Windster</span>
                  </a>
                  <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                     <label  className="sr-only">Search</label>
                     <div className="mt-1 relative lg:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                        <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                     </div>
                  </form>
               </div>
               <div className="flex items-center">
                  <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                     <span className="sr-only">Search</span>
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                     </svg>
                  </button>
                 
                  {/* <div className="relative px-2">
                     <img className="w-10 h-10 rounded-full" src="/assets/icons/land1.png" alt=""/>
                     <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                  <button className='h-8 w-8 rounded-full p-0 hover:bg-slate-300/2 focus:bg-slate-300/20'>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                     </svg>
                  </button> */}
               </div>
            </div>
         </div>
      </nav>

    </>
  )
}

export default AdminNavbar