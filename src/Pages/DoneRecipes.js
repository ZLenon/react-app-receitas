import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DoneFavoriteIdem from '../Components/DoneFavoriteEqual';
import ProfileIcon from '../Components/ProfileIcon';

function DoneRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [filteredRecipes, setFilteredRecipes] = useState(doneRecipes);

  const handleFilter = ({ target }) => {
    if (target.value === 'all') setFilteredRecipes(doneRecipes);
    else {
      const filtered = doneRecipes.filter((recipe) => recipe.type === target.value);
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div>
      <header>
        <Header title="Done Recipes" profile />
        <ProfileIcon />
      </header>

      <main>
        <button
          type="button"
          value="meal"
          data-testid="filter-by-meal-btn"
          onClick={ handleFilter }
        >
          Meals
        </button>
        <button
          type="button"
          value="drink"
          data-testid="filter-by-drink-btn"
          onClick={ handleFilter }
        >
          Drinks
        </button>
        <button
          type="button"
          value="all"
          data-testid="filter-by-all-btn"
          onClick={ handleFilter }
        >
          All
        </button>
      </main>

      { filteredRecipes.map((doneRecipe, index) => (<DoneFavoriteIdem
        key={ `done-recipe-card-${index}` }
        recipe={ doneRecipe }
        doneOrFav="done"
        index={ index }
        handleFavorites={ () => {} }
      />))}
      <Footer />
    </div>
  );
}

export default DoneRecipes;
