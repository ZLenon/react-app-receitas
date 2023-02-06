import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import '../css/RecipeDetails.css';
import share from '../images/shareIcon.svg';
import favoriteImg from '../images/blackHeartIcon.svg';
import notFavoriteImg from '../images/whiteHeartIcon.svg';

const SIX = 6;
const NEGATIVEONE = -1;

function MealsIdRecipeProgress({ match }) {
  const {
    fetchIngredientFood,
    fetchDrinkApi,
    filterIngredient,
    ingredientFoodValue,
    filterMeasure,
    drinkValue,
  } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;
  const history = useHistory();
  const [copySuccess, setCopySuccess] = useState('');
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchIngredientFood('i', 'lookup', idToBeFetched);
      await fetchDrinkApi('s', 'search', '');
    };

    resolvePromese();
    const storageFavorites = localStorage.getItem('favoriteRecipes') || [];

    if (storageFavorites.includes(idToBeFetched)) {
      setFavorite(true);
    }
  }, []);

  const recipes = {
    id: [idToBeFetched],
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

  const storage2 = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const storageString2 = Object.keys(storage2.meals)[0];

  const storageString = JSON.stringify(storage.id);

  const handleClick = (e) => {
    if (e.target.innerText === 'Continue Recipe') {
      history.push(`${idToBeFetched}/in-progress`);
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

    const mealsToFavorite = ingredientFoodValue.meals[0];

    const mealObj = {
      id: mealsToFavorite.idMeal,
      type: 'meal',
      nationality: mealsToFavorite.strArea,
      category: mealsToFavorite.strCategory,
      alcoholicOrNot: '',
      name: mealsToFavorite.strMeal,
      image: mealsToFavorite.strMealThumb,
    };

    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    if (!Array.isArray(favoriteRecipes)) {
      favoriteRecipes = [];
    }

    const isMealInFavorites = favoriteRecipes
      .findIndex((favoriteMeal) => favoriteMeal.id === mealObj.id) !== NEGATIVEONE;

    if (isMealInFavorites) {
      favoriteRecipes = favoriteRecipes
        .filter((favoriteMeal) => favoriteMeal.id !== mealObj.id);
    } else {
      favoriteRecipes.push(mealObj);
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };

  return (
    <div>
      {!ingredientFoodValue.meals ? (
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
              src={ ingredientFoodValue.meals.map((meal) => meal.strMealThumb) }
              alt="recipe img"
              data-testid="recipe-photo"
              className="detailsImg"
            />

            <h1 data-testid="recipe-title">
              {ingredientFoodValue.meals.map((meal) => meal.strMeal)}
            </h1>
            <h2 data-testid="recipe-category">
              {ingredientFoodValue.meals.map((meal) => meal.strCategory)}
            </h2>
          </header>
          <section>
            <h1> Ingredients: </h1>
            {filterIngredient.map((eachIngredient, index) => (
              <ul key={ index }>
                <li data-testid={ `${index}-ingredient-name-and-measure` }>
                  {`${eachIngredient[1]} : ${filterMeasure[index]
                    ? (filterMeasure[index][1]) : ''}`}
                </li>
              </ul>
            ))}

            <h1> Instructions </h1>
            <p data-testid="instructions">
              {ingredientFoodValue.meals[0].strInstructions}
            </p>
            <div>
              <video
                data-testid="video"
                width="360"
                height="330"
                controls
                autoPlay
              >
                <source
                  src={ ingredientFoodValue.meals[0].strYoutube }
                  type="video/mp4"
                />
                <track kind="captions" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
          <section>
            <div className="scroll">
              {!drinkValue.drinks
                ? ''
                : drinkValue.drinks.slice(0, SIX).map((drink, index) => (
                  <div key={ index } className="scroll2">
                    <img
                      src={ drink.strDrinkThumb }
                      alt={ index }
                      className="recomendImg"
                      data-testid={ `${index}-recommendation-card` }
                    />
                    <p data-testid={ `${index}-recommendation-title` }>
                      {drink.strDrink}
                    </p>
                  </div>
                ))}
            </div>
          </section>
          <button
            type="button"
            data-testid="start-recipe-btn"
            className={ idToBeFetched === storageString ? 'hidden' : 'btn-details' }
            onClick={ handleClick }
          >
            {
              idToBeFetched !== storageString2 ? 'Continue Recipe' : 'Start Recipe'
            }
          </button>
        </div>
      )}
    </div>
  );
}

MealsIdRecipeProgress.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default MealsIdRecipeProgress;
