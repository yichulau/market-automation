import React, { useState, useEffect, useMemo } from 'react'
import ValueCards from '../../components/admin/Common/ValueCards'
import AdminLayout from '../../components/admin/Layout/AdminLayout'


const Dashboard = () => {
  const valuesArr = [
    {value: '$65.6k', category: 'Income'},
    {value: '$12.6k', category: 'Income'},
    {value: '$55.6k', category: 'Income'},
    {value: '$65.6k', category: 'Income'}
  ]
  console.log(valuesArr)
  return (
   <>
      <AdminLayout>
        <div className='flex flex-col gap-4'>
          <div className='bg-white rounded-lg p-4 shadow-md divide-y divide-slate-200'>
            <div className='flex flex-row justify-between items-center mb-4'>
                <div className='inline-flex'>
                  <h3 className='text-xl text-gray-600'>Order Overview</h3>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-black-300 hover:rounded-full active:bg-blue-700 active:text-white focus:outline-none focus:ring focus:ring-violet-300'>Monthly</div>
                    <div className='px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-black-300 hover:rounded-full active:bg-blue-700 active:text-white'>Yearly</div>
                </div>
            </div>
            <div className='flex flex-wrap pt-4 w-full gap-2 justify-around place-content-stretch justify-items-start'>
              {valuesArr.map(item => 
                <ValueCards value={item.value} category={item.category} />
              )}
            </div>
          </div>
          <div className='bg-white shaow-md rounded-sm'>
            hellow
          </div>
        </div>
      </AdminLayout>
   </>
  )
}

export default Dashboard