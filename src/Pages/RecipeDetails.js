import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import RecipesFoodCard from '../Components/RecipesFoodCard';

function MealsIdRecipeProgress({ match }) {
  const { fetchIngredientFood } = useContext(FetchRecipeContext);
  const idToBeFetched = match.params.id;

  // const idToBeFetched = match.params.id;

  useEffect(() => {
    const resolvePromese = async () => {
      await fetchIngredientFood('i', 'lookup', idToBeFetched);
    };

    resolvePromese();
  }, []);

  return (
    <RecipesFoodCard />
  );
}

MealsIdRecipeProgress.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default MealsIdRecipeProgress;
