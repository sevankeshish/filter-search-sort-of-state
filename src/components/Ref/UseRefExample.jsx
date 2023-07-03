import { useState, useRef, useEffect } from "react";

const UseRefExample = () => {
  const [input, setInput] = useState("");
  const previousState = useRef();
  const [count, setCount] = useState();
  const precCount = useRef();
  // const inputRef = useRef();

  // const resetHandler = () => {
  //   setInput("");
  //   inputRef.current.focus();
  // };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    previousState.current = input;
  }, [input]);

  useEffect(() => {
    precCount.current = count;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        // ref={inputRef}
      />
      {/* <button onClick={resetHandler}>Reset</button> */}
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        generate number
      </button>
      <p>
        my current count is {count} and mu previous ccount is{" "}
        {precCount.current}
      </p>
      <p>
        my name is {input} but it used to be {previousState.current}
      </p>
    </div>
  );
};

export default UseRefExample;
