import React from 'react'
import { useAxios } from 'use-axios-client'

import CreateCocktail from './CreateCocktail'
import Spinner from '../components/UIElements/Spinner'

const EditCocktail = () => {

    // TODO: refactor and create an EditPage component with the response data from CocktailDetail as props.

    const { data, error, loading } = useAxios({
        url: `${process.env.REACT_APP_COCKTAILFINDBYID}`,
    });

    return (
        <div>
            {loading && <div><Spinner /></div>}
            {error && <div>Oops! Something went wrong... {error.message}</div>}
            {data && <div><CreateCocktail
                name={data.name}
                id={data.id}
                key={data.key}
                image={data.image}
                ingredients={data.ingredients}
                recipe={data.recipe}
                owner={data.owner}
            /></div>}
        </div>
    )
}

export default EditCocktail
