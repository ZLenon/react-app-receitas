import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../Components/Footer';
/* import renderWithRouter from './' */

describe('Testando o Componente Footer', () => {
  it('test', () => {
    render(<Footer />);

    const drinks = screen.getByRole('img', { name: /drinkicon/i });
    const meals = screen.getByRole('img', { name: /mealicon/i });

    expect(drinks).toBeDefined();
    expect(meals).toBeDefined();

    userEvent.click(drinks);
    userEvent.click(meals);
  });
});
