import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <section className="bg-gray-800">
            <div className="flex justify-center px-6 py-3 xl:hidden">
                <div className="relative items-center max-w-xs w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaSearch className="fill-current text-gray-600" />
                    </div>
                    <input className="w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search Cocktails" />

                </div>


            </div>
        </section>
    )
}

export default SearchBar
