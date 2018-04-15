import {createStore} from 'redux';

const incrementCount = (payload = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy
  };
};

//Count reducer
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT' :
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT' :
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions:
// 1. increment the count.
// 2. reset the count to zero.
store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 2}));

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});

