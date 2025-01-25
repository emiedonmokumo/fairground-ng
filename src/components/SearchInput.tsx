'use client'
import React, { useState } from 'react';

const SearchInput = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event: any) => {
        setSearchText(event.target.value);
    };

    return (
        <div className='flex px-5 space-x-2'>
            <div className="flex items-center border rounded-md px-4 py-2 shadow-sm bg-gray-100 w-full">
                <input
                    type="text"
                    placeholder="Hinted search text"
                    value={searchText}
                    onChange={handleInputChange}
                    className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
                <button type="button" className="text-gray-500 hover:text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchInput;
