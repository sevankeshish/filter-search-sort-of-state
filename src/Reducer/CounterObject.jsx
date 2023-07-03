import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secoundCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "addFive":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "addOne2":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "addFive2":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrement2":
      return {
        ...state,
        secoundCounter: state.secoundCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterObject = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>count one is : {count.firstCounter}</p>
      <p>count Two is : {count.secoundCounter}</p>
      <div>
        <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "addFive", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
          decrement1
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "addOne2", value: 1 })}>
          addOne2
        </button>
        <button onClick={() => dispatch({ type: "addFive2", value: 5 })}>
          addFive2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};

export default CounterObject;
