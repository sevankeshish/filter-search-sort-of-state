import { useState } from "react";

const WithCount = (WrappedComponent, IncrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);
    const countHandler = () => {
      setCount(count + IncrementValue);
    };
    return (
      <WrappedComponent count={count} countHandler={countHandler} {...props} />
    );
  };
  return UpdatedComponent;
};

export default WithCount;
