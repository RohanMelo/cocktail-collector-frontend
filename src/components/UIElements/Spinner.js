import React from 'react'

import './Spinner.css'

const Spinner = () => {
    return (
        <div className="sk-chase h-full flex items-center">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    )
}

export default Spinner
