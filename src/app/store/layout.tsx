import Navbar from '@/components/Navbar'
import CategorySideBar from '@/components/Store/CategorySideBar'
import React from 'react'

const layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar />
      <div className='mt-3'>
        <div className='flex px-2 space-x-5'>
          <div className=' w-[16%]'>
            <CategorySideBar />
          </div>
          <div className='flex flex-col w-[80%]'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default layout
