// import { useContext } from "react";
import { useCount, useCountActions } from "./CounterProvider";
// import { CounterContext, CounterContextDispather } from "./CounterProvider";

const CounterOne = () => {
  //   const count = useContext(CounterContext);
  //   const setCount = useContext(CounterContextDispather);
  const count = useCount();
  // const setCount = useCountAction();
  // const { addFive, addOne } = useCountActions();
  const dispatch = useCountActions();

  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  return (
    <div>
      <p>count is : {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>add one</button> */}
      {/* <button onClick={addOne}>add one</button>
      <button onClick={addFive}>add five</button> */}
      <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        minus one
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
