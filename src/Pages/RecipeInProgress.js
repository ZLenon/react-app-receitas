import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../css/Recipes.css';

function MealsIdRecipeProgress({ match }) {
  const { fetchIngredientFood, filterIngredient, ingredientFoodValue,
    filterMeasure, setIsChecked, isChecked } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;
  const [isDisabled, setDisabled] = useState(false);
  const checkboxesFromLocalStorage = JSON.parse(
    localStorage.getItem('inProgressRecipes'),
  );

  const value = Object.values(isChecked);

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchIngredientFood('i', 'lookup', idToBeFetched);
    };
    resolvePromese();

    if (checkboxesFromLocalStorage) {
      setIsChecked(checkboxesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify(isChecked),
    );
    setDisabled(value.length === filterIngredient.length && value
      .every((valueChecked) => valueChecked === true));
  }, [checkboxesFromLocalStorage]);

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
              >
                <img src={ shareIcon } alt="shareIcon" />
              </button>
              <button
                type="button"
                data-testid="favorite-btn"
              >
                <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
              </button>
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
                      onChange={ ({ target: { name, checked } }) => setIsChecked({
                        ...isChecked,
                        [name]: checked,
                      }) }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    />
                    { `${eachIngredient[1]} : ${(filterMeasure[index])[1]}` }
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
