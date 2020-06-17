import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAxios } from 'use-axios-client'


import CocktailList from '../components/UIElements/CocktailList'
import Spinner from '../components/UIElements/Spinner'

// TODO: implement Searchbar in its own component for cleaner code here.

const Home = (props) => {

    // If you have props.passId, it means you're acessing the Home component from the Collections page, so you want to request cocktails that the user liked/owns

    let fetchUrl

    props.passId ? fetchUrl = `${process.env.REACT_APP_COCKTAILLIST_BYUSER}` : fetchUrl = `${process.env.REACT_APP_COCKTAILLIST}`

    const { data, error, loading } = useAxios({
        url: fetchUrl,
    });

    const [searchText, setSearchText] = useState('')


    return (
        <>
            {loading && <div><Spinner /></div>}
            {error && <div>Oops! Something went wrong... {error.message}</div>}
            {data && <div>
                <div>
                    <section className="bg-gray-800">
                        <div className="flex justify-center px-6 py-3">
                            <div className="relative items-center max-w-xs w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaSearch className="fill-current text-gray-600" />
                                </div>
                                <input className="w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search Cocktails" onChange={e => setSearchText(e.target.value)} value={searchText} />

                            </div>


                        </div>
                    </section>

                    <div className="mt-2">

                        {!searchText && <CocktailList cocktailList={data} />}
                        {searchText && <CocktailList cocktailList={data.filter((c) => c.name.toLowerCase().includes(searchText.toLowerCase()))} />}

                    </div>
                </div>
            </div>}
        </>
    )
}

export default Home
