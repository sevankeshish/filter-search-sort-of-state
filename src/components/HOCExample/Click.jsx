import { useState } from "react";
import WithCount from "../HOC/withCount";

const ClickComponent = ({ count, countHandler, name }) => {
  // const [count, setCount] = useState(0);

  // const countHandler = () => {
  //   setCount(count + 1);
  // };
  console.log(name);

  return (
    <div>
      <h2 onClick={countHandler}>clicked {count} times</h2>

      {/* <button onClick={() => setCount(count + 1)}>click {count}</button> */}
    </div>
  );
};

export default WithCount(ClickComponent, 5);
