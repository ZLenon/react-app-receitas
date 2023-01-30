import { createContext, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const FetchMealContext = createContext();

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

    setLoading(false);
    setIngredient(ingredientJson);

    if (ingredientJson.meals.length === 1) {
      history.push(`/meals/${ingredientJson.meals[0].idMeal}`);
    }
  };

  const fetchDrinkApi = async (letter, method, ingredient) => {
    setLoading(true);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${letter}=${ingredient}`;
    console.log(letter);

    const drinkResults = await fetch(url);

    const drinkJson = await drinkResults.json();

    setLoading(false);

    setDrink(drinkJson);

    if
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
    <FetchMealContext.Provider value={ saveAllData }>
      { children }
    </FetchMealContext.Provider>

  );
}

FetchNameApi.propTypes = {
  children: propTypes.element.isRequired,
};

export default FetchNameApi;
