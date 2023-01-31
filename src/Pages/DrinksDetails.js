import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';

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
    <h1>DrinksIdRecipe</h1>
  );
}

DrinksIdRecipe.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default DrinksIdRecipe;
