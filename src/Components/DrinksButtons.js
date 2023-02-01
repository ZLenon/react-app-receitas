import React, { useContext, useState } from 'react';
import { FetchRecipeContext } from '../Context/FetchRecipes';

function DrinksButtons() {
  /*  await fetchDrinkApi('c', 'list', 'list'); */
  const { fetchDrinkApi } = useContext(FetchRecipeContext);
  const [isClick, setClick] = useState(0);
  const LIMIT = 1;

  const AllCategory = async () => {
    await fetchDrinkApi('s', 'search', '');
  };

  const OrdinaryCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchDrinkApi('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchDrinkApi('c', 'filter', 'Ordinary Drink');
  };
  const CocktailCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchDrinkApi('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchDrinkApi('c', 'filter', 'Cocktail');
  };
  const ShakeCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchDrinkApi('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchDrinkApi('c', 'filter', 'Shake');
  };
  const OtherCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchDrinkApi('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchDrinkApi('c', 'filter', 'Other/Unknown');/* 'Other/Unknown' ou 'Other / Unknown' */
  };
  const CocoaCategory = async () => {
    setClick(isClick + 1);
    if (isClick === LIMIT) {
      await fetchDrinkApi('s', 'search', '');
      setClick(0);
      return;
    }
    await fetchDrinkApi('c', 'filter', 'Cocoa');
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
        data-testid="Ordinary Drink-category-filter"
        onClick={ OrdinaryCategory }
      >
        Ordinary Drink
      </button>
      <button
        type="button"
        data-testid="Cocktail-category-filter"
        onClick={ CocktailCategory }
      >
        Cocktail
      </button>
      <button
        type="button"
        data-testid="Shake-category-filter"
        onClick={ ShakeCategory }
      >
        Shake
      </button>
      <button
        type="button"
        data-testid="Other/Unknown-category-filter"
        onClick={ OtherCategory }
      >
        Other/Unknown
      </button>
      <button
        type="button"
        data-testid="Cocoa-category-filter"
        onClick={ CocoaCategory }
      >
        Cocoa
      </button>
    </>
  );
}

export default DrinksButtons;
