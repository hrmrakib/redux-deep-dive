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
    <div>
      <h2 className='text-black text-lg'>Count: {counterValue}</h2>

      <div className='flex items-center gap-5 mt-4'>
        <button onClick={() => dispatch(increment())}>++</button>
        <button onClick={() => dispatch(decrement())}>--</button>
        <button onClick={() => dispatch(reset())}>00</button>
      </div>
    </div>
  );
};

export default Counter;
