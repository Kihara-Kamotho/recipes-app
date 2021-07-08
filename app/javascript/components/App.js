import React from 'react' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddRecipe from './AddRecipe'
import Home from './Home'
import NewRecipe from './NewRecipe'
import Recipe from './Recipe/Recipe'
import Recipes from './Recipes/Recipes'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/recipe" component={NewRecipe} />
        <Route exact path="/add" component={AddRecipe} />
      </Switch>
    </Router>
  )
}

export default App 