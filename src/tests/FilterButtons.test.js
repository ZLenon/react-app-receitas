import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
// import { setTimeout } from 'timers/promises';
import App from '../App';
import FetchNameApi from '../Context/FetchRecipes';
import '@testing-library/jest-dom';
import renderWithRouter from './renderWithRouter';

beforeEach(() => {
  renderWithRouter(
    <MemoryRouter>
      <FetchNameApi>
        <App />
      </FetchNameApi>
    </MemoryRouter>,
  );

  const inputEmail = screen.getByTestId(/email-input/i);
  userEvent.type(inputEmail, 'trybe@trybe.com');
  const inputSenha = screen.getByTestId(/password-input/i);
  userEvent.type(inputSenha, '1234567');
  const button = screen.getByTestId(/login-submit-btn/i);
  userEvent.click(button);
});

const allButtons = 'All-category-filter';

describe('Test the component MealsButtons', () => {
  it('Test if screen buttons has been render correct', async () => {
    const allBtn = screen.getByTestId(allButtons);
    const beefBtn = screen.getByTestId('Beef-category-filter');
    const goatBtn = screen.getByTestId('Goat-category-filter');
    const chickenBtn = screen.getByTestId('Chicken-category-filter');
    const breakfastBtn = screen.getByTestId('Breakfast-category-filter');
    const dessertBtn = screen.getByTestId('Dessert-category-filter');
    expect(allBtn).toBeInTheDocument();
    expect(beefBtn).toBeInTheDocument();
    expect(goatBtn).toBeInTheDocument();
    expect(chickenBtn).toBeInTheDocument();
    expect(breakfastBtn).toBeInTheDocument();
    expect(dessertBtn).toBeInTheDocument();

    userEvent.click(beefBtn);
    userEvent.click(goatBtn);
    userEvent.click(chickenBtn);
    userEvent.click(breakfastBtn);
    userEvent.click(dessertBtn);
    userEvent.click(allBtn);
  });
});

describe('Test the component DrinksButtons', () => {
  it('Test if button Beef has the correct use', async () => {
    const beefBtn = screen.getByTestId('Beef-category-filter');
    userEvent.click(beefBtn);
    userEvent.click(beefBtn);

    const corba = await screen.findByText('Corba');
    expect(corba).toBeInTheDocument();
  });
  it('Test if button Goat has the correct use', async () => {
    const goatBtn = screen.getByTestId('Goat-category-filter');
    userEvent.click(goatBtn);
  });
  it('Test if button Chichen has the correct use', async () => {
    const chickenBtn = screen.getByTestId('Chicken-category-filter');
    userEvent.click(chickenBtn);
    userEvent.click(chickenBtn);

    const corba = await screen.findByText('Corba');
    expect(corba).toBeInTheDocument();
  });
  it('Test if button Breakfast has the correct use', async () => {
    const breakfastBtn = screen.getByTestId('Breakfast-category-filter');
    userEvent.click(breakfastBtn);
    userEvent.click(breakfastBtn);

    const corba = await screen.findByText('Corba');
    expect(corba).toBeInTheDocument();
  });
  it('Test if button Dessert has the correct use', async () => {
    const dessertBtn = screen.getByTestId('Dessert-category-filter');
    userEvent.click(dessertBtn);
    userEvent.click(dessertBtn);

    const corba = await screen.findByText('Corba');
    expect(corba).toBeInTheDocument();
  });
  it('Test if button All has the correct use', async () => {
    const allBtn = screen.getByTestId(allButtons);
    userEvent.click(allBtn);
  });
});

describe('Test the component DrinksButtons', () => {
  it('Test if screen buttons has been render correct', async () => {
    const drinks = screen.getByRole('img', { name: /drinkicon/i });
    userEvent.click(drinks);
    const allBtn = screen.getByTestId(allButtons);
    const ordinary = screen.getByTestId('Ordinary Drink-category-filter');
    const cocktail = screen.getByTestId('Cocktail-category-filter');
    const shake = screen.getByTestId('Shake-category-filter');
    const otherUnknow = screen.getByTestId('Other/Unknown-category-filter');
    const cocoa = screen.getByTestId('Cocoa-category-filter');
    expect(allBtn).toBeInTheDocument();
    expect(ordinary).toBeInTheDocument();
    expect(cocktail).toBeInTheDocument();
    expect(shake).toBeInTheDocument();
    expect(otherUnknow).toBeInTheDocument();
    expect(cocoa).toBeInTheDocument();

    userEvent.click(ordinary);
    userEvent.click(shake);
    userEvent.click(cocktail);
    userEvent.click(otherUnknow);
    userEvent.click(cocoa);
    userEvent.click(allBtn);
  });
});

describe('Test the component MealsButtons', () => {
  beforeEach(() => {
    const drinks = screen.getByRole('img', { name: /drinkicon/i });
    userEvent.click(drinks);
  });

  it('Test if button Beef has the correct use', async () => {
    const ordinary = screen.getByTestId('Ordinary Drink-category-filter');
    userEvent.click(ordinary);
    userEvent.click(ordinary);

    const a1 = await screen.findByText('A1');
    expect(a1).toBeInTheDocument();
  });
  it('Test if button Goat has the correct use', async () => {
    const cocktail = screen.getByTestId('Cocktail-category-filter');
    userEvent.click(cocktail);
    userEvent.click(cocktail);

    const a1 = await screen.findByText('A1');
    expect(a1).toBeInTheDocument();
  });
  it('Test if button Chichen has the correct use', async () => {
    const shake = screen.getByTestId('Shake-category-filter');
    userEvent.click(shake);
    userEvent.click(shake);

    const a1 = await screen.findByText('A1');
    expect(a1).toBeInTheDocument();
  });
  it('Test if button Breakfast has the correct use', async () => {
    const otherUnknow = screen.getByTestId('Other/Unknown-category-filter');
    userEvent.click(otherUnknow);
    userEvent.click(otherUnknow);

    const a1 = await screen.findByText('A1');
    expect(a1).toBeInTheDocument();
  });
  it('Test if button Dessert has the correct use', async () => {
    const cocoa = screen.getByTestId('Cocoa-category-filter');
    userEvent.click(cocoa);
    userEvent.click(cocoa);

    const a1 = await screen.findByText('A1');
    expect(a1).toBeInTheDocument();
  });
  it('Test if button All has the correct use', async () => {
    const allBtn = screen.getByTestId(allButtons);
    userEvent.click(allBtn);
  });
});
