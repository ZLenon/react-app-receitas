import chickenMeals from '../../cypress/mocks/chickenMeals';
import soupMeals from '../../cypress/mocks/soupMeals';
import ginDrinks from '../../cypress/mocks/ginDrinks';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';

export const mockFetch = () => {
  global.fetch = jest.fn((url) => Promise.resolve({
    json: async () => {
      if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken') {
        return Promise.resolve(chickenMeals);
      }
      if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup') {
        return Promise.resolve(soupMeals);
      }
      if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin') {
        return Promise.resolve(ginDrinks);
      }
      if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
        return Promise.resolve(meals);
      }
      if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=') {
        return Promise.resolve(drinks);
      }
      return Promise.reject(new Error('Invalid url'));
    },
  }));
};
