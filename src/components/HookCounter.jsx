import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const clickHnadler = () => {
    setCount((prevState) => prevState + 1);
  };
  const clickHnadler3 = () => {
    setCount((prevState) => prevState + 3);
  };
  const clickHnadler5 = () => {
    // setCount(count + 5);
    for (let i = 0; i < 5; i++) {
      console.log(count);
      //   setCount(count + 1);
      setCount((prevState) => {
        return prevState + 1;
      });
    }
  };
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={clickHnadler}>add count by one</button>
      <button onClick={clickHnadler3}>add count by three</button>
      <button onClick={clickHnadler5}>add count by five</button>
    </div>
  );
};

export default HookCounter;
