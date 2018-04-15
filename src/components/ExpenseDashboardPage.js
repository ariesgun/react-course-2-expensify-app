import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;