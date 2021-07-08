import React, {useState, useEffect} from 'react' 
import axios from 'axios' 

const Recipe = (props) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    // console.log(props)
    const id = props.match.params.id 
    const url = `/api/v1/recipes/${id}`

    axios.get(url)
      .then(resp => {
        setRecipe(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const deleteRecipe = () => {
    const id = props.match.params.id
    const url = `/api/v1/recipes/${id}`

    axios.delete(url)
      .then(resp => {
        console.log(resp);
        props.history.push('/recipes')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const updateRecipe = () => {
    const id = props.match.params.id
    const url = `/api/v1/recipes/${id}`

    axios.patch(url)
      .then(resp => {
        console.log(resp) 
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  return(
    <div>
      in recipes#show
      {recipe.name}
      <button onClick={deleteRecipe}>delete recipe</button>
      <button onClick={updateRecipe}>update recipe</button>
    </div>
  )
}

export default Recipe 
