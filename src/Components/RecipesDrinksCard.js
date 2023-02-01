import React, { useContext } from 'react';
import { FetchRecipeContext } from '../Context/FetchRecipes';

function RecipesDrinkCard() {
  const { filterDrink, drinkValue,
    drinkMeasure } = useContext(FetchRecipeContext);

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
        </div>
      )}
    </div>
  );
}

export default RecipesDrinkCard;
