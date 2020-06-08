import React from 'react'

import Card from './Card'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'



const CocktailListItem = ({ id, image, name, stars }) => {

    const RANGE = (x, y) => Array.from((function* () {
        while (x <= y) yield x++
    })())

    const rangeStars = RANGE(1, stars)
    const blankStars = 5 - stars
    console.log(rangeStars)
    console.log(blankStars)

    return (
        <>
            <li>
                <Card>
                    <div className="">
                        <Link to={`/cocktails/${id}`}><img src={image} alt={name} className="" /></Link>
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
