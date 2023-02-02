import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import '../css/RecipeDetails.css';

const num = 6;

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

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchIngredientFood('i', 'lookup', idToBeFetched);
      await fetchDrinkApi('s', 'search', '');
    };

    resolvePromese();
  }, []);

  return (
    <div>
      {!ingredientFoodValue.meals ? (
        <p> Carregando... </p>
      ) : (
        <div>
          <header>
            <img
              src={ ingredientFoodValue.meals.map((meal) => meal.strMealThumb) }
              alt="recipe img"
              data-testid="recipe-photo"
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
                  {`${eachIngredient[1]} : ${filterMeasure[index][1]}`}
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
                width="140"
                height="140"
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
              {!drinkValue.drinks ? (
                ''
              ) : (
                drinkValue.drinks.slice(0, num).map((drink, index) => (
                  <div key={ index } className="scroll2">
                    <img
                      src={ drink.strDrinkThumb }
                      alt={ index }
                      className="recomendImg"
                      data-testid={ `${index}-recommendation-card` }
                    />
                    <p data-testid={ `${index}-recommendation-title` }>
                      { drink.strDrink }
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
          <button type="button" data-testid="start-recipe-btn" className="btn-details">
            Start Recipe
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
