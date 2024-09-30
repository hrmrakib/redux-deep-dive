import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../features/counter/counterSlice";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='border-2'>
      <h2 className='text-black'>value: {counterValue}</h2>

      <div className='flex items-center'>
        <button onClick={() => dispatch(increment())}>++</button>
        <button onClick={() => dispatch(decrement())}>--</button>
        <button onClick={() => dispatch(reset())}>00</button>
      </div>
    </div>
  );
};

export default Counter;
