import React from 'react'

const Card = ({ children }) => {
    return (
        <div className="w-30 h-30 border-1 border-solid border-black ml-2 mr-2">
            {children}
        </div>
    )
}

export default Card
