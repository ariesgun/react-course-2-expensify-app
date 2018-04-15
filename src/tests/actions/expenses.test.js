import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id : '123abc' });
  expect(action).toEqual({ 
    type:'REMOVE_EXPENSE', 
    id: '123abc' 
  });
});

test('should setup remove edit action object', () => {
  const action = editExpense('123abc', {amount:'200', description: 'test1' });
  expect(action).toEqual({ 
    type:'EDIT_EXPENSE', 
    id: '123abc',
    updates: {
      amount: '200',
      description: 'test1'
    }
  });
});

test('should setup add expense with provided value', () => {
  const expenseData = {
    description: 'Rent',
    amount: 14500,
    createdAt: 1000,
    note: "This was last month rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense with provided value', () => {
  const expenseData = {};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

