import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FetchRecipeContext } from '../Context/FetchRecipes';

function MealsButtons() {
  /*  await fetchIngredientFood('c', 'list', 'list'); */
  const { fetchIngredientFood } = useContext(FetchRecipeContext);
  const [isClick, setClick] = useState(0);
  const LIMIT = 1;
  const history = useHistory();

  const AllCategory = async () => {
    await fetchIngredientFood('s', 'search', '');
  };

  const BeefCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchIngredientFood('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchIngredientFood('c', 'filter', 'Beef');
  };
  const GoatCategory = async () => {
    // setClick(isClick + 1);
    // if (isClick === LIMIT) {
    //   await fetchIngredientFood('s', 'search', '');
    //   setClick(0);
    //   return;
    // }

    console.log(GoatCategory);
    await fetchIngredientFood('c', 'filter', 'Goat');

    history.push('/meals/52968');
  };
  const ChickenCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchIngredientFood('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchIngredientFood('c', 'filter', 'Chicken');
  };
  const BreakFastCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchIngredientFood('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchIngredientFood('c', 'filter', 'Breakfast');
  };
  const DessertCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchIngredientFood('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchIngredientFood('c', 'filter', 'Dessert');
  };

  return (
    <>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ AllCategory }
      >
        All
      </button>
      <button
        type="button"
        data-testid="Beef-category-filter"
        onClick={ BeefCategory }
      >
        Beef
      </button>
      <button
        type="button"
        data-testid="Goat-category-filter"
        onClick={ GoatCategory }
      >
        Goat
      </button>
      <button
        type="button"
        data-testid="Chicken-category-filter"
        onClick={ ChickenCategory }
      >
        Chicken
      </button>
      <button
        type="button"
        data-testid="Breakfast-category-filter"
        onClick={ BreakFastCategory }
      >
        Breakfast
      </button>
      <button
        type="button"
        data-testid="Dessert-category-filter"
        onClick={ DessertCategory }
      >
        Dessert
      </button>
    </>
  );
}

export default MealsButtons;
