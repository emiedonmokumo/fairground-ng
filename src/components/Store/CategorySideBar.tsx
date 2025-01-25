import categories from '@/utils/sampleCategory'
import Link from 'next/link'
import React from 'react'

const CategorySideBar = () => {
  return (
    <div className='w-full border border-gray-100 p-5 h-[800px]'>
      <ul className='text-xs flex flex-col space-y-2 text-gray-500'>
        {categories.map((category, index) =>(
        <li key={index}>
            <Link href={'#'}>{category}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySideBar
