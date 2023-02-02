import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import '../css/RecipeDetails.css';

const num = 6;

function DrinksIdRecipe({ match }) {
  const { fetchDrinkApi, fetchIngredientFood, filterDrink,
    drinkValue, drinkMeasure, ingredientFoodValue } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchDrinkApi('i', 'lookup', idToBeFetched);
      await fetchIngredientFood('s', 'search', '');
    };
    resolvePromese();
  }, []);
  return (
    <div>
      {!drinkValue.drinks ? (
        <p> Carregando... </p>
      ) : (
        <div>
          <header>
            <img
              src={ drinkValue.drinks.map((drink) => drink.strDrinkThumb) }
              alt="recipe img"
              data-testid="recipe-photo"
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
        </div>

      )}

    </div>

  );
}

DrinksIdRecipe.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DrinksIdRecipe;
