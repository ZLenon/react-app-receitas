import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';

function MealsIdRecipeProgress({ match }) {
  const { fetchIngredientFood } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchIngredientFood('i', 'lookup', idToBeFetched);
    };
    resolvePromese();
  }, []);

  return (

    <h1>MealsIdRecipeProgress</h1>

  );
}

MealsIdRecipeProgress.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default MealsIdRecipeProgress;
