import { createContext, useMemo, useState } from 'react';
import propTypes from 'prop-types';

export const FetchMealContext = createContext();

function FetchNameApi({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [ingredientFoodValue, setIngredient] = useState([]);
  const [drinkValue, setDrink] = useState([]);

  const fetchIngredientFood = async (letter, method, ingredient) => {
    setLoading(true);

    const url = `https://www.themealdb.com/api/json/v1/1/${method}.php?${letter}=${ingredient}`;
    console.log(letter);

    const ingredientFood = await fetch(url);

    const ingredientJson = await ingredientFood.json();

    setLoading(false);

    setIngredient(ingredientJson);
  };

  const fetchDrinkApi = async (letter, method, ingredient) => {
    setLoading(true);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${letter}=${ingredient}`;
    console.log(letter);

    const drinkResults = await fetch(url);

    const drinkJson = await drinkResults.json();

    setLoading(false);

    setDrink(drinkJson);
  };

  const saveAllData = useMemo(() => ({
    fetchIngredientFood,
    fetchDrinkApi,
    isLoading,
    ingredientFoodValue,
    drinkValue,
  }), [isLoading, ingredientFoodValue, drinkValue]);

  return (
    <FetchMealContext.Provider value={ saveAllData }>
      { children }
    </FetchMealContext.Provider>

  );
}

FetchNameApi.propTypes = {
  children: propTypes.element.isRequired,
};

export default FetchNameApi;
