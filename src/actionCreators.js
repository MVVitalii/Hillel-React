import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from './actions';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByValue = (value) => ({
  type: INCREMENT_BY_VALUE,
  payload: value,
});

export const reset = () => ({
  type: RESET,
});
