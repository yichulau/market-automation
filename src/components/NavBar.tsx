import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LandingNavbar from './homepage/LandingNavbar'
import AdminNavbar from './admin/AdminNavbar'
import AdminSidebar from './admin/AdminSidebar'
import useWindowDimensions from '../hooks/useWindowDimensions'
import TechnologyCard from './TechnologyCard'

const NavBar = () => {
  const router = useRouter();
  const checkNavBar = router.pathname === '/' ? true : false; 
  
  return (
   <>
   {checkNavBar && <LandingNavbar />}
   </>
  )
}

export default NavBar