import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import AuthContext from '../../shared/context/AuthContext'

const NavLinks = () => {
    const auth = useContext(AuthContext)

    return (
        <ul className="flex">
            {auth.isLoggedIn && (
                <li className="text-white font-semibold uppercase text-sm tracking-wide ml-2 hover:text-yellow-500">
                    <NavLink to={`/${auth.userId}/collection`}>Collection</NavLink>
                </li>)}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout} className="block ml-2 border-none text-white font-semibold uppercase text-sm tracking-wide hover:text-yellow-500">Logout</button>
                </li>)}
            {!auth.isLoggedIn && (
                <li className="text-white font-semibold uppercase text-sm tracking-wide ml-2 hover:text-yellow-500">
                    <NavLink to="/auth">Login</NavLink>
                </li>
            )}
        </ul>
    )
}

export default NavLinks
