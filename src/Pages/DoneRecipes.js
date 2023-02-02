import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';
import shareIcon from '../images/shareIcon.svg';

// const recipesMock = [
//   {
//     id: '52977',
//     type: 'meal',
//     nationality: 'Turkish',
//     category: 'Side',
//     name: 'Corba',
//     image: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
//     doneDate: '22/10/11',
//     tags: ['Soup'],
//   },

//   {
//     id: '17203',
//     type: 'drink',
//     nationality: 'Indian',
//     category: 'Ordinary Drink',
//     name: 'Kir',
//     image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
//     doneDate: '2017-09-02',
//     tags: ['IBA,ContemporaryClassic'],
//   },
// ];
function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState('');

  useEffect(() => {
    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(doneRecipesStorage);
    setFilterRecipes(doneRecipesStorage);
  }, []);
  console.log(doneRecipes);

  // req. 47
  const shareRecip = (index) => {
    const { type, id } = doneRecipes[index];
    const url = `http://localhost:3000/${type}s/${id}`;
    setCopiedUrl('Link copied!');
    navigator.clipboard.writeText(url);
  };

  //  req. 48
  const filteredRecipes = (type) => {
    if (type === 'all') {
      setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
      return;
    }
    setDoneRecipes(filterRecipes.filter((recipe) => recipe.type === type));
  };

  return (
    <div>
      <header>
        <Header />
        <ProfileIcon />
        <h1 data-testid="page-title">Done Recipes</h1>
      </header>

      {copiedUrl !== '' && <p>{ copiedUrl }</p>}
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => filteredRecipes('all') }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ () => filteredRecipes('meal') }
      >
        Meals
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filteredRecipes('drink') }
      >
        Drinks
      </button>

      {doneRecipes && doneRecipes.map((recipe, index) => (
        <div key={ recipe.id }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              style={ { width: '100px', height: '100px' } }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipe.name }
              src={ recipe.image }
            />
          </Link>

          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'meal'
              ? `${recipe.nationality} - ${recipe.category}` : recipe.alcoholicOrNot}
          </p>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => shareRecip(index) }
          >
            <img
              alt="share"
              src={ shareIcon }
            />
          </button>

          {recipe.tags.length > 0 && recipe.tags.map((tag) => (
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
