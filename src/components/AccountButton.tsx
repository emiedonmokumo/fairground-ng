'use client'
import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import Link from 'next/link'

const AccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      {/* Dropdown Trigger */}
      <button
        className="text-gray-800 font-medium py-2 px-4 border-b-2 border-transparent hover:border-gray-400"
        onClick={toggleDropdown}
      >
        My Account
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute text-sm p-3 flex flex-col justify-center mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-md">
          <Link href={'/auth/signup'} className="px-4 py-2 text-center text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50">
            Sign up
          </Link>
          <Link href={'/auth/login'} className="mt-2 px-4 py-2 text-center bg-pink-700 text-white rounded-md hover:bg-pink-800">
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountButton
