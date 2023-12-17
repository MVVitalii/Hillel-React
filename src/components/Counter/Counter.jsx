import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../redux/slices/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="btn" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
