import React, { useState, useEffect } from 'react';
// import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(doneRecipesStorage);
  }, []);
  console.log(doneRecipes);
  return (
    <div>
      <header>
        <Header />
        <ProfileIcon />
        <h1 data-testid="page-title">Done Recipes</h1>
      </header>

      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>

      {doneRecipes && doneRecipes.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            data-testid={ `${index}-horizontal-image` }
            alt={ recipe.name }
            src={ recipe.image }
          />

          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'meal'
              ? `${recipe.nationality} - ${recipe.category}` : recipe.alcoholicOrNot}
          </p>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
          >
            <img
              alt="share"
              src={ shareIcon }
            />
          </button>

          {recipe.tags && recipe.tags.map((tag) => (
            <p
              key={ tag }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </p>
          ))}
          ;
        </div>
      ))}
      ;
      <Footer />
    </div>
  );
}

DoneRecipes.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DoneRecipes;
