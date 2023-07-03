import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const clickHandler = () => {
    setItem([
      ...item,
      { id: item.length, number: Math.floor(Math.random() * 10) },
    ]);
  };

  return (
    <div>
      <button onClick={clickHandler}>add items</button>
      {item.map((e) => {
        return <li key={e.id}>{e.number}</li>;
      })}
    </div>
  );
};

export default HookArray;
