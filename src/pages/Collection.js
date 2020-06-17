import React, { useContext } from 'react'

import Home from './Home'
import AuthContext from '../shared/context/AuthContext'

const Collection = () => {

    const auth = useContext(AuthContext)
    const passId = auth.userId

    return (
        <Home passId={passId} />
    )
}

export default Collection
