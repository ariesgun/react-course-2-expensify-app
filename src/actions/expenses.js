import uuid from 'uuid';
import database from '../firebase/firebase.js';

// ADD_EXPENSE
// return object
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
  // expense: {
  //   id: uuid(),
  //   description,
  //   note,
  //   amount,
  //   createdAt
  // }
});

// Return function
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {
      description, note, amount, createdAt
    };

    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      } ));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = (
  {
    id
  } = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (
  id, updates
) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Return function fetch Expenses
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(
        expenses
      ));
  });
}};
