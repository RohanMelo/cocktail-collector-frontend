import React from 'react'
import MainLogo from '../../assets/logococktailcollector.png'
import { NavLink } from 'react-router-dom'

// flex justify-between px-4 py-3
const MainHeader = ({ children }) => {
    return (
        <header className="bg-gray-900 px-0 py-1 flex justify-around items-center">
            <NavLink to="/">

                <img src={MainLogo} alt="CocktailCollector logo" className="h-10 w-auto"></img>
            </NavLink>

            {children}

        </header>
    )
}

export default MainHeader
