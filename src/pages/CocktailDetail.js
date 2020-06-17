import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { useAxios } from 'use-axios-client'

import Spinner from '../components/UIElements/Spinner'
import AuthContext from '../shared/context/AuthContext'


const CocktailDetail = () => {
    const auth = useContext(AuthContext)
    const { data, error, loading } = useAxios({
        url: `${process.env.REACT_APP_COCKTAILFINDBYID}`,
    });


    // const cocktailIdParam = useParams().cocktailId - gotta use this later to get the correct URL endpoint


    return (
        <div>
            {loading && <div><Spinner /></div>}
            {error && <div className="h-full text-lg text-center">Oops! Something went wrong... {error.message}</div>}
            {data && <div>
                <p className="text-xl font-bold">{data.name}</p>
                <div>
                    <img src={data.image} alt={data.name} />
                </div>
                <div>
                    <h3>Ingredients</h3>
                    <ul>
                        {data.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
                    </ul>
                </div>
                <div>
                    <h3>Recipe</h3>
                    <ol>
                        {data.recipe.map((recipeStep, index) => (<li key={index}>{recipeStep}</li>))}
                    </ol>
                </div>
            </div>}

        </div>
    )
}

export default CocktailDetail
