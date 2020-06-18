import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAxios } from 'use-axios-client'

import Spinner from '../components/UIElements/Spinner'
import AuthContext from '../shared/context/AuthContext'


const CocktailDetail = () => {
    const auth = useContext(AuthContext)
    const { data, error, loading } = useAxios({
        url: `${process.env.REACT_APP_COCKTAILFINDBYID}`,
    });


    // const cocktailIdParam = useParams().cocktailId
    // using this later to get the correct URL endpoint


    return (
        <div className="lg:mx-32 lg:my-10">
            {loading && <div><Spinner /></div>}
            {error && <div className="h-full text-lg text-center">Oops! Something went wrong... {error.message}</div>}
            {data && <div><div className="flex flex-col mt-4 md:flex-row justify-center">
                <div className="">

                    <div className="text-xl font-bold text-center bg-yellow-500 px-1 py-1 rounded-lg mx-2">{data.name}</div>
                    <div className="md:max-w-sm">
                        <img src={data.image} alt={data.name} className="" />
                    </div>
                </div>
                <div className="bg-gray-900 shadow-lg rounded-sm px-4 py-4 mx-2 md:w-1/3">
                    <h3 className="font-semibold text-lg uppercase text-white">Ingredients</h3>
                    <ul className="mt-2 list-disc px-4 py-4 text-gray-100">
                        {data.ingredients.map((ingredient, index) => (<li key={index} className="mt-1">{ingredient}</li>))}
                    </ul>
                </div>
                <div className="bg-gray-900 shadow-lg mt-2 rounded-sm px-4 py-4 mx-2 mb-2 md:mt-0 md:mb-0 md:w-1/3">
                    <h3 className="font-semibold text-lg uppercase text-white">Recipe</h3>
                    <ol className="mt-2 list-decimal px-4 py-4 text-gray-100">
                        {data.recipe.map((recipeStep, index) => (<li key={index} className="mt-1">{recipeStep}</li>))}
                    </ol>
                </div>
            </div>
                {!(data.owner === auth.userId) && <div className="mt-4 flex justify-center">
                    <button type="button" className="bg-yellow-500 px-10 py-4 rounded font-semibold focus:outline-none"><Link to={`/cocktails/add/${data.id}`}>ADD TO COLLECTION</Link></button>


                </div>}
                {(data.owner === auth.userId) && <div className="flex justify-center px-4 py-2 mb-2 md:mt-2">
                    <button type="button" className="bg-yellow-500 px-10 py-4 rounded font-semibold focus:outline-none w-1/2 md:w-1/6"> <Link to={`/cocktails/update/${data.id}`}>EDIT</Link></button>
                    <button type="button" className="bg-red-500 px-10 py-4 rounded font-semibold focus:outline-none ml-4 w-1/2 md:w-1/6"><Link to={`/cocktails/delete/${data.id}`}>DELETE</Link></button>

                </div>}
            </div>
            }

        </div>
    )
}

export default CocktailDetail
