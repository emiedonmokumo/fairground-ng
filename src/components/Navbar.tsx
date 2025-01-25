import React from 'react'
import SearchInput from './SearchInput'
import { FaBars } from 'react-icons/fa'
import AccountButton from './AccountButton'
import CartButton from './CartButton'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='py-5 px-8'>
            <div className='flex items-center'>
                <button className="hamburger-menu mr-5">
                    <FaBars size={20} className='hvoer:text-[#c23c60] text-gray-500' />
                </button>
                <div className="flex space-x-2 items-center justify-center mr-5">
                    <img src="/logo.png" className="w-10" alt="" />
                    <Link href={'/store'}><h1 className="text-lg font-semibold font-montserrat text-[#A22E4F]">Fairground</h1></Link>
                </div>
                <div className='flex-grow mr-2'>
                    <SearchInput />
                </div>
                <div className="mr-5">
                    <AccountButton />
                </div>
                {/* <CartButton /> */}
                <Link href="#" className='bg-[#f6d5db] hover:bg-[#efb2bd] text-[#c23c60] p-2 px-6 rounded-md font-montserrat'>Sell</Link>
            </div>
        </nav>
    )
}

export default Navbar
