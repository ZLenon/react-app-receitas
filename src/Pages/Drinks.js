import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import SearchIcon from '../Components/SearchBar';
import ProfileIcon from '../Components/ProfileIcon';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { FetchRecipeContext } from '../Context/FetchRecipes';
import Recipes from '../Components/Recipes';
import DrinksButtons from '../Components/DrinksButtons';

const num = 12;

function Drinks() {
  const { drinkValue } = useContext(FetchRecipeContext);
  return (
    <>
      <header>
        <Header />
        <ProfileIcon />
        <SearchIcon />
        <h1 data-testid="page-title">Drinks</h1>
      </header>
      <DrinksButtons />
      <main>
        <div>
          { !drinkValue.drinks ? '' : drinkValue.drinks.map(
            (item, index) => index < num && (
              <Link
                key={ item.idDrink }
                to={ `/drinks/${item.idDrink}` }
              >
                <Card
                  index={ index }
                  name={ item.strDrink }
                  img={ item.strDrinkThumb }
                />
              </Link>
            ),
          ) }

        </div>
      </main>
      <Recipes />
      <Footer />
    </>
  );
}

Drinks.propTypes = {
  props: PropTypes.element,
}.insRequired;

export default Drinks;
