/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from '../actions';
import { decrement, increment, incrementByValue, reset } from '../actionCreators';

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const reducer = (store, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          count: store.count + 1,
        };
      case INCREMENT_BY_VALUE:
        return {
          count: store.count + action.payload,
        };
      case DECREMENT:
        return {
          count: store.count - 1,
        };
      case RESET:
        return {
          count: 0,
        };
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrementCount = () => {
    dispatch(increment());
  };

  const handleIncrementByValueCount = (value) => {
    dispatch(incrementByValue(+value));
  };

  const handleDecrementCount = () => {
    dispatch(decrement());
  };

  const handleResetCount = () => {
    dispatch(reset());
  };

  const providedValue = {
    state,
    onIncrement: handleIncrementCount,
    onDecrement: handleDecrementCount,
    onIncrementByValue: handleIncrementByValueCount,
    onReset: handleResetCount,
  };

  return <CounterContext.Provider value={providedValue}>{children}</CounterContext.Provider>;
};
