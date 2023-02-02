import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Meals from './Pages/Meals';
import Drinks from './Pages/Drinks';
import RecipeDetails from './Pages/RecipeDetails';
import DrinkDetails from './Pages/DrinksDetails';
import Profile from './Pages/Profile';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/meals/:id-da-receita" component={ MealsIdRecipe } />
      <Route exact path="/drinks/:id-da-receita" component={ DrinksIdRecipe } />
      <Route
        exact
        path="/meals/:id-da-receita/em-progreso"
        component={ RecipeDetails }
      />
      <Route
        exact
        path="/drinks/:id-da-receita/em-progreso"
        component={ DrinkDetails }
      />
      <Route
        exact
        path="/profile"
        component={ Profile }
      />
      <Route
        exact
        path="/done-recipes"
        component={ DoneRecipes }
      />
      <Route
        exact
        path="/favorite-recipes"
        component={ FavoriteRecipes }
      />
      <Route exact path="/meals" component={ Meals } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
