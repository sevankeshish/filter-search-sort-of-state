import { useEffect, useRef } from "react";

const FunctionalRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default FunctionalRef;
