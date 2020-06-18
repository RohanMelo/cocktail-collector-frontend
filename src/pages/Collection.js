import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Home from './Home'
import AuthContext from '../shared/context/AuthContext'

const Collection = () => {

    const auth = useContext(AuthContext)
    const passId = auth.userId

    return (
        <>
            <Home passId={passId} />
            <div className="mt-4 mb-4 md:mt-8 flex justify-center">

                <button type="button" className="bg-gray-900 text-white px-10 py-4 rounded font-semibold focus:outline-none w-1/2 md:w-1/4"><Link to="/cocktails/create">ADD NEW COCKTAIL</Link></button>
            </div>
        </>
    )
}

export default Collection
