import React from 'react'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'

const MainNavigation = () => {
    return (
        <>
            <MainHeader>
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
            <SearchBar />
        </>
    )
}

export default MainNavigation
