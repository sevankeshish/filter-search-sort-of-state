import { createContext, useState, useContext, useReducer } from "react";

const CounterContext = createContext();
const CounterContextDispather = createContext();

// export const CounterContext = createContext();
// export const CounterContextDispather = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      {/* <CounterContextDispather.Provider value={setCount}> */}
      <CounterContextDispather.Provider value={dispatch}>
        {children}
      </CounterContextDispather.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
// export const useCountAction = () => useContext(CounterContextDispather);
export const useCountActions = () => {
  // const setCount = useContext(CounterContextDispather);
  return useContext(CounterContextDispather);

  // const addOne = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const addFive = () => {
  //   setCount((prevCount) => prevCount + 5);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  // return { addFive, addOne, decrement };
};
