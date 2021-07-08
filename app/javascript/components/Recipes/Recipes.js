import React, { useState, useEffect } from 'react' 
import axios from 'axios' 
import Recipe from './Recipe'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const url = '/api/v1/recipes'

    axios.get(url) 
      .then(resp => {
        setRecipes(resp.data) 
      })
      .catch(error => {
        console.log(error) 
      })

  }, [recipes.length])

  const recipeList = recipes.map((recipe) => {
    // console.log(recipe)
    return(
      <div>
        <Recipe key={recipe.name} recipe={recipe} />
        <Link to={`/recipe/${recipe.id}`}>view recipe</Link>
      </div>
    )
  })
  return(
    <div>
      in recipes#index
      {recipeList}
      <Link to="/add">
        add recipe 
      </Link>
    </div>
  )
}

export default Recipes 
