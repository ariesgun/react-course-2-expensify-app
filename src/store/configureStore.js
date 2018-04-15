import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses.js'
import filterReducer from '../reducers/filters.js'

// Store creation
export default() => {
  const Store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return Store;
};