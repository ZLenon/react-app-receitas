import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FetchFoodApi from './Context/FetchFoodApi';
import FetchNameApi from './Context/FetchNameApi';
import FirstLetter from './Context/FirstLetter';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <FetchNameApi>
        <FirstLetter>
          <FetchFoodApi>
            <App />
          </FetchFoodApi>
        </FirstLetter>
      </FetchNameApi>
    </BrowserRouter>,
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
