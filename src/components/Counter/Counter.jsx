import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="counter">Count: {count}</div>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={decrement}>
        -
      </button>
    </>
  );
};

export default Counter;
