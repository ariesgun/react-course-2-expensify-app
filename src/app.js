import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import {addExpense, startSetExpenses} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase.js';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000, createdAt: 2000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 200, createdAt: 500 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// console.log(state);
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p> , document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx , document.getElementById('app'));
});

