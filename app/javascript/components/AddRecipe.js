import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddRecipe = () => {
  // handleSubmit 
  const handleSubmit = (e) => {

    let name = e.target[0].value
    let ingredients = e.target[1].value
    let instruction = e.target[2].value

    let data = {
      name,
      ingredients,
      instruction
    };

    console.log(data)
    postRecipe(data)
  }

  const postRecipe = (data) => {
    axios.post("http://localhost:3000/api/v1/recipes", data)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      adding new recipe
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe name</label>
                <input
                  type="text"
                  name="name"
                  id="recipeName"
                  className="form-control"

                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  id="recipeIngredients"
                  className="form-control"

                />
                <small id="ingredientsHelp" className="form-text text-muted">
                  Separate each ingredient with a comma.
                </small>
              </div>
              <label htmlFor="instruction">Preparation Instructions</label>
              <textarea
                className="form-control"
                id="instruction"
                name="instruction"
                rows="5"
                require
              />
              <button type="submit" className="btn custom-button mt-3">
                Create Recipe
              </button>
              <Link to="/recipes" className="btn btn-link mt-3">
                Back to recipes
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe 