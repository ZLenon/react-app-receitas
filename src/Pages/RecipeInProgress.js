import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import shareIcon from '../images/shareIcon.svg';
import favoriteImg from '../images/blackHeartIcon.svg';
import notFavoriteImg from '../images/whiteHeartIcon.svg';
import '../css/Recipes.css';

const NEGATIVEONE = -1;

function MealsIdRecipeProgress({ match }) {
  const { fetchIngredientFood, filterIngredient, ingredientFoodValue,
    filterMeasure, setIsChecked, isChecked } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;
  const [isDisabled, setDisabled] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [isFavorite, setFavorite] = useState(false);
  const checkboxesFromLocalStorage = JSON.parse(
    localStorage.getItem('inProgressRecipes'),
  );

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchIngredientFood('i', 'lookup', idToBeFetched);
    };
    resolvePromese();

    if (checkboxesFromLocalStorage) {
      setIsChecked(checkboxesFromLocalStorage);
    }
    const storageFavorites = localStorage.getItem('favoriteRecipes') || [];

    if (storageFavorites.includes(idToBeFetched)) {
      setFavorite(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify(isChecked),
    );
    /* value.length === filterIngredient.length  */
    setDisabled();
    /* Object.values(isChecked)
      .every((valueChecked) => valueChecked === true); */
  }, [checkboxesFromLocalStorage]);

  const handleCheck = ({ target: { name, checked } }) => {
    setIsChecked({
      ...isChecked,
      [name]: checked,
    });
  };

  const handleShareBtn = () => {
    navigator.clipboard.writeText(`http://localhost:3000/meals/${[idToBeFetched]}`).then(() => {
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

  const handleClick = () => {
    console.log('clicou');
  };

  return (
    <div>
      {!ingredientFoodValue.meals ? (
        <p> Carregando... </p>
      ) : (

        <div>
          <header>
            <p>
              <button
                data-testid="share-btn"
                type="button"
                onClick={ handleShareBtn }
              >
                <img src={ shareIcon } alt="shareIcon" />
              </button>
              <button
                type="button"
                data-testid="favorite-btn"
                onClick={ handleFavoritBtn }
                src={ isFavorite ? favoriteImg : notFavoriteImg }
              >
                <img
                  src={ isFavorite ? favoriteImg : notFavoriteImg }
                  alt="FavoriteImg"
                />
              </button>
              {
                !copySuccess ? '' : <span>Link copied!</span>
              }
            </p>

            <img
              src={ ingredientFoodValue.meals.map((meal) => meal.strMealThumb) }
              alt="recipe img"
              data-testid="recipe-photo"
              width="360"
              height="330"
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
            {
              filterIngredient.map((eachIngredient, index) => (
                <label
                  key={ index }
                  htmlFor="ingredient"
                  data-testid={ `${index}-ingredient-step` }
                  className={ isChecked[eachIngredient[1]] && 'scratched' }
                >
                  <div>
                    <input
                      type="checkbox"
                      className="ingredients"
                      checked={ isChecked[eachIngredient[1]] }
                      name={ eachIngredient[1] }
                      value={ eachIngredient[1] }
                      onChange={ handleCheck }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    />
                    { `${eachIngredient[1]} : ${filterMeasure[index]
                      ? (filterMeasure[index][1]) : ''}` }
                  </div>
                </label>
              ))
            }

            <h1> Instructions </h1>
            <p data-testid="instructions">
              { ingredientFoodValue.meals[0].strInstructions }
            </p>
            <div>
              <video
                data-testid="video"
                width="360"
                height="330"
                poster={ ingredientFoodValue.meals[0].strMealThumb }
                controls
              >
                <source
                  src={ ingredientFoodValue.meals[0].strYoutube }
                  type="url"
                />
                <track kind="captions" />
                Your browser does not support the video tag.
              </video>
            </div>
            <button
              type="button"
              disabled={ !isDisabled }
              onClick={ handleClick }
              data-testid="finish-recipe-btn"
            >
              FINISH RECIPE
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

MealsIdRecipeProgress.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default MealsIdRecipeProgress;
