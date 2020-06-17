import React from 'react'

import CocktailListItem from './CocktailListItem'


const CocktailList = ({ cocktailList }) => {

    // TODO: if user is the owner, put an "Edit" button below the cocktail.



    return (
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {cocktailList.map((cocktail) => (
                <CocktailListItem
                    id={cocktail.id}
                    key={cocktail.key}
                    image={cocktail.image}
                    name={cocktail.name}
                    stars={cocktail.stars}
                />
            ))}

        </ul>
    )
}

export default CocktailList
