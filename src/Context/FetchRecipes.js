import { createContext, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const FetchRecipeContext = createContext();

function FetchNameApi({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [ingredientFoodValue, setIngredient] = useState([]);
  const [drinkValue, setDrink] = useState([]);
  const history = useHistory();

  const fetchIngredientFood = async (letter, method, ingredient) => {
    setLoading(true);

    const url = `https://www.themealdb.com/api/json/v1/1/${method}.php?${letter}=${ingredient}`;

    const ingredientFood = await fetch(url);

    const ingredientJson = await ingredientFood.json();

    setIngredient(ingredientJson);

    setLoading(false);

    if (ingredientJson.meals === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if
    (ingredientJson.meals.length === 1) {
      history.push(`/meals/${ingredientJson.meals[0].idMeal}`);
    }
  };

  const fetchDrinkApi = async (letter, method, ingredient) => {
    setLoading(true);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${letter}=${ingredient}`;

    const drinkResults = await fetch(url);

    const drinkJson = await drinkResults.json();

    setDrink(drinkJson);
    setLoading(false);

    if (drinkJson.drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if
    (drinkJson.drinks.length === 1) {
      history.push(`/drinks/${drinkJson.drinks[0].idDrink}`);
    }
  };

  const saveAllData = useMemo(() => ({
    fetchIngredientFood,
    fetchDrinkApi,
    isLoading,
    ingredientFoodValue,
    drinkValue,
  }), [isLoading, ingredientFoodValue, drinkValue]);

  return (
    <FetchRecipeContext.Provider value={ saveAllData }>
      { children }
    </FetchRecipeContext.Provider>

  );
}

FetchNameApi.propTypes = {
  children: propTypes.element.isRequired,
};

export default FetchNameApi;
