import React, { useState } from 'react'

const CreateCocktail = (props) => {

    // TODO: Add endpoint logic to Add/Edit cocktail when submiting.

    const [nameInput, setNameInput] = useState(props.name || '')
    const [imageInput, setImageInput] = useState(props.image || '')
    const [ingredientsInput, setIngredientsInput] = useState(props.ingredients || '')
    const [recipeInput, setRecipeInput] = useState(props.recipe || '')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                <p className="text-lg font-bold text-center">{props.name ? 'EDIT' : 'ADD NEW'} COCKTAIL</p>
                <div className="row sm:flex justify-center">
                    <div className="col sm:w-1/2">
                        <div className="box border rounded flex flex-col shadow bg-gray-400 mt-4">
                            <div className="box__title bg-gray-900 px-3 py-2 border-b"><h3 class="text-sm text-white font-medium">Cocktail Name</h3></div>
                            <input type="text" placeholder="" class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" name="tt" value={nameInput} onChange={e => setNameInput(e.target.value)} />

                        </div>
                        <div className="box border rounded flex flex-col shadow bg-gray-400 mt-4">

                            <div className="box__title bg-gray-900 px-3 py-2 border-b"><h3 class="text-sm text-white font-medium">Image URL</h3></div>
                            <input type="text" placeholder="" class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" name="tt" value={imageInput} onChange={e => setImageInput(e.target.value)} />
                        </div>
                        <div className="box border rounded flex flex-col shadow bg-gray-400 mt-4">

                            <div className="box__title bg-gray-900 px-3 py-2 border-b"><h3 class="text-sm text-white font-medium">Ingredients</h3></div>
                            <textarea placeholder="" class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" name="tt" value={ingredientsInput} onChange={e => setIngredientsInput(e.target.value)} />
                        </div>
                        <div className="box border rounded flex flex-col shadow bg-gray-400 mt-4">

                            <div className="box__title bg-gray-900 px-3 py-2 border-b"><h3 class="text-sm text-white font-medium">Recipe</h3></div>
                            <textarea placeholder="" class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" name="tt" value={recipeInput} onChange={e => setRecipeInput(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div className="mt-4 flex justify-center mb-4">

                    <button type="submit" className="bg-yellow-500 px-10 py-4 rounded font-semibold focus:outline-none w-1/2 md:w-1/6">{props.name ? 'EDIT' : 'ADD'}</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCocktail
