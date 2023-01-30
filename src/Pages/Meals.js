import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SearchIcon from '../Components/SearchBar';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import Card from '../Components/Card';

const num = 12;

function Meals() {
  const { ingredientFoodValue } = useContext(FetchRecipeContext);
  return (
    <>
      <header>
        <Header />
        <ProfileIcon />
        <SearchIcon />
        <h1 data-testid="page-title">Meals</h1>
      </header>
      <main>
        <div>
          { !ingredientFoodValue.meals ? '' : ingredientFoodValue.meals.map(
            (item, index) => index < num && (
              <Card
                index={ index }
                key={ item.idMeal }
                name={ item.strMeal }
                img={ item.strMealThumb }
              />
            ),
          ) }

        </div>
      </main>
      <Footer />
    </>
  );
}

Meals.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Meals;
