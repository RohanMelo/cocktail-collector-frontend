import React from 'react'

import CocktailListItem from './CocktailListItem'


const CocktailList = () => {

    const dummyCocktails = [{ id: 1, key: 1, name: 'Martini (classic)', image: 'https://cdn.diffords.com/contrib/stock-images/2018/05/5af301cc25362.jpg', stars: 5 }, { id: 2, key: 2, name: 'Daiquiri (natural)', image: 'https://cdn.diffords.com/contrib/stock-images/2018/05/5af3010ae8f19.jpg', stars: 4 }]

    return (
        <ul className="flex">
            {dummyCocktails.map((cocktail) => (
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
