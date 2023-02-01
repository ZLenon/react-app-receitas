import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import RecipesDrinkCard from '../Components/RecipesDrinksCard';

function DrinksIdRecipe({ match }) {
  const { fetchDrinkApi } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchDrinkApi('i', 'lookup', idToBeFetched);
    };
    resolvePromese();
  }, []);
  return (
    <RecipesDrinkCard />
  );
}

DrinksIdRecipe.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DrinksIdRecipe;
