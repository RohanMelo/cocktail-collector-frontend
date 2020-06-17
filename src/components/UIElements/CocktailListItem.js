import React from 'react'

import Card from './Card'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'

// TOFIX: put the RANGE function into a separate file in utils. It was giving an error before.

const CocktailListItem = ({ id, image, name, stars }) => {

    const RANGE = (x, y) => Array.from((function* () {
        while (x <= y) yield x++
    })())

    const rangeStars = RANGE(1, stars)
    const blankStars = 5 - stars

    return (
        <>
            <li className="mb-2">
                <Card>
                    <div className="flex justify-center">
                        <Link to={`/cocktails/${id}`}><img src={image} alt={name} className="h-56 md:h-64" /></Link>
                    </div>
                    <div className="bg-yellow-500 px-1 py-1 rounded-lg text-sm text-center font-semibold relative truncate">
                        {name}
                    </div>
                    <div className="flex justify-center mt-1">
                        {rangeStars.map((star) => (
                            <AiFillStar className="fill-current text-yellow-500" key={star} />)
                        )}
                        {blankStars > 0 && RANGE(1, blankStars).map((star) => (
                            <AiFillStar className="fill-current text-gray-500" key={star} />
                        ))}

                    </div>
                </Card>

            </li>
        </>
    )
}

export default CocktailListItem
