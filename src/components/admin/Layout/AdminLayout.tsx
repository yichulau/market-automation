import React, { Fragment, useEffect, useState, ReactNode, FC } from 'react'
import Head from "next/head";
import AdminSidebar from '../AdminSidebar';
import AdminNavbar from '../AdminNavbar';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

type Props = {
  children : ReactNode
}

const AdminLayout: FC<Props> = ({children}) => {

  const {innerWidth, innerHeight} = useWindowDimensions();
  const [value, setValue] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(()=>{
    setHasMounted(true)
  },[])

  if(!hasMounted){
    return null;
  }

  return (
    <>
      <Fragment>
          <AdminNavbar setValue={setValue} />
          <section className='bg-gray-50'>
              <div className='flex flex-row lg:flex-row mx-auto md:h-screen w-full '>
                  {innerWidth! < 1024 ? 
                  <div className='fixed lg:flex overflow-hidden bg-white'>           
                      <AdminSidebar toggle={value}/>
                  </div> : 
                  <div className='flex overflow-hidden bg-white pr-14'>           
                      <AdminSidebar toggle={true}/>
                  </div> 
                  } 
                  <div className='flex flex-col p-8 w-full'>
                  {children}
                  </div>  
              </div>    
          </section>
      </Fragment>
    </>
  )
}

export default AdminLayout