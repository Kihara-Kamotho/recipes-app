import React from 'react' 

const Recipe = ({recipe}) => {
  return(
    <div>
      {recipe.name}
      {recipe.ingredients}
    </div>
  )
}

export default Recipe