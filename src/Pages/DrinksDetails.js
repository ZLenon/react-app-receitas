import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import '../css/RecipeDetails.css';
import share from '../images/shareIcon.svg';
import favoriteImg from '../images/blackHeartIcon.svg';
import notFavoriteImg from '../images/whiteHeartIcon.svg';

const num = 6;
const num2 = -1;

function DrinksIdRecipe({ match }) {
  const { fetchDrinkApi, fetchIngredientFood, filterDrink,
    drinkValue, drinkMeasure, ingredientFoodValue } = useContext(FetchRecipeContext);
  const [copySuccess, setCopySuccess] = useState('');
  const [isFavorite, setFavorite] = useState(false);
  const idToBeFetched = match.params.id;
  const history = useHistory();

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchDrinkApi('i', 'lookup', idToBeFetched);
      await fetchIngredientFood('s', 'search', '');
    };

    resolvePromese();
    const storageFavorites = localStorage.getItem('favoriteRecipes') || [];

    if (storageFavorites.includes(idToBeFetched)) {
      setFavorite(true);
    }
  }, []);

  const recipes = {
    id: 178319,
  };

  const obj = {
    drinks: {
      17203: [1, 2],
    },
    meals: {
      52977: [1, 2],
    },
  };

  localStorage.setItem('DoneRecipes', JSON.stringify(recipes));
  localStorage.setItem('inProgressRecipes', JSON.stringify(obj));

  const storage = JSON.parse(localStorage.getItem('DoneRecipes'));

  const storageString = JSON.stringify(storage.id);

  const storage2 = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const storageString2 = Object.keys(storage2.drinks)[0];

  const handleClick = (e) => {
    if (e.target.innerText === 'Start Recipe') {
      history.push(`drinks/${idToBeFetched}/in-progress`);
    }
  };

  const handleShareBtn = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopySuccess('Link copiado!');
    }, () => {
      setCopySuccess('Erro ao copiar link');
    });
  };

  const handleFavoritBtn = () => {
    setFavorite(!isFavorite);
    const drinksToFavorite = drinkValue.drinks[0];

    const drinkObj = {
      id: drinksToFavorite.idDrink,
      type: 'drink',
      nationality: '',
      category: drinksToFavorite.strCategory,
      alcoholicOrNot: drinksToFavorite.strAlcoholic,
      name: drinksToFavorite.strDrink,
      image: drinksToFavorite.strDrinkThumb,
    };

    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    if (!Array.isArray(favoriteRecipes)) {
      favoriteRecipes = [];
    }

    const isMealInFavorites = favoriteRecipes
      .findIndex((favoriteMeal) => favoriteMeal.id === drinkObj.id) !== num2;

    if (isMealInFavorites) {
      favoriteRecipes = favoriteRecipes
        .filter((favoriteMeal) => favoriteMeal.id !== drinkObj.id);
    } else {
      favoriteRecipes.push(drinkObj);
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };

  return (
    <div>
      {!drinkValue.drinks ? (
        <p> Carregando... </p>
      ) : (
        <div>
          <header>
            <button
              type="button"
              data-testid="share-btn"
              onClick={ handleShareBtn }
              src={ share }
            >
              <img src={ share } alt="shareImg" />
            </button>
            <button
              type="button"
              data-testid="favorite-btn"
              onClick={ handleFavoritBtn }
              src={ isFavorite ? favoriteImg : notFavoriteImg }
            >
              <img src={ isFavorite ? favoriteImg : notFavoriteImg } alt="FavoriteImg" />
            </button>
            {
              !copySuccess ? '' : <p>Link copied!</p>
            }
            <img
              src={ drinkValue.drinks.map((drink) => drink.strDrinkThumb) }
              alt="recipe img"
              data-testid="recipe-photo"
              className="detailsImg"
            />

            <h1 data-testid="recipe-title">
              {drinkValue.drinks.map((drink) => drink.strDrink)}
            </h1>
            <h2 data-testid="recipe-category">
              {drinkValue.drinks.map((drink) => drink.strAlcoholic)}
            </h2>
          </header>
          <section>
            <h1> Ingredients: </h1>
            {
              filterDrink.map((eachIngredient, index) => (
                <ul key={ index }>
                  <li
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    { `${eachIngredient[1]} : ${(drinkMeasure[index])[1]}` }
                  </li>
                </ul>
              ))
            }

            <h1> Instructions </h1>
            <p data-testid="instructions">
              { drinkValue.drinks[0].strInstructions }
            </p>
          </section>
          <section>
            <div className="scroll">
              {!ingredientFoodValue.meals ? (
                ''
              ) : (
                ingredientFoodValue.meals.slice(0, num).map((meal, index) => (
                  <div key={ index } className="scroll2">
                    <img
                      src={ meal.strMealThumb }
                      alt={ index }
                      className="recomendImg"
                      data-testid={ `${index}-recommendation-card` }
                    />
                    <p data-testid={ `${index}-recommendation-title` }>
                      { meal.strMeal}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
          <button
            type="button"
            data-testid="start-recipe-btn"
            className={ idToBeFetched === storageString
              ? 'hidden' : 'btn-details' }
            // className="btn-details"
            onClick={ handleClick }
          >
            {
              idToBeFetched === storageString2 ? 'Start Recipe' : 'Continue Recipe'
            }
          </button>
        </div>

      )}

    </div>

  );
}

DrinksIdRecipe.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DrinksIdRecipe;
