import { useEffect, useState } from "react";

const FunctionBase = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(
    (prevState) => {
      console.log("update");
      document.title = `clicked ${count} times`;
      return () => {
        console.log("object");
      };
    },
    [count]
  );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("hi");
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}> count : {count}</button>
    </div>
  );
};

export default FunctionBase;
