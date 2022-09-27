import React from 'react'
import AdminLayout from '../../components/admin/Layout/AdminLayout';

const Schedule = () => {
  return (
    <>
    <AdminLayout>
    <div className='flex flex-col w-full'>
      <div className='flex flex-row my-2 w-full'>
        <h2 className='text-2xl text-gray-700 font-bold'>Scedule</h2>
        <div className='items-center mx-2 justify-center text-2xl text-gray-400'>|</div>
        <h3 className='text-sm text-blue-600' style={{lineHeight:'2.1rem'}}>Scedule</h3>
      </div>
      <div className='bg-white rounded-lg shadow-sm w-full p-4'>
        

      </div>
    </div>

    </AdminLayout>
    </>
  )
}

export default Schedule