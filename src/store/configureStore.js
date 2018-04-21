import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';
import authReducer from '../reducers/auth.js';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default() => {
  const Store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer,
      auth: authReducer
    }),
    composeEnhancers( applyMiddleware(thunk) )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return Store;
};