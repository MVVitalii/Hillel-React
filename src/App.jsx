import './App.css';
import { useContext, useState } from 'react';
import { CounterContext } from './contexts/CounterContext';

function App() {
  const [value, setValue] = useState(0);

  const { state, onIncrement, onDecrement, onIncrementByValue, onReset } = useContext(CounterContext);

  return (
    <>
      <div>
        <div>
          <input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => onIncrementByValue(value)}>Increment By Value</button>
        </div>
        <h1>Counter: {state.count}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
