import { useReducer } from "react";
import { useCount, useCountActions } from "../Context/CounterProvider";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CountReducer = () => {
  // const count = useCount();
  // const { addFive, addOne, decrement } = useCountActions();

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count is : {count}</p>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addFive")}>add five</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
};

export default CountReducer;
