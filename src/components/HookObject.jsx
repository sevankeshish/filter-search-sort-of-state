import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const changeHandler2 = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  return (
    <form>
      <input type="text" onChange={changeHandler} />
      <input type="text" onChange={changeHandler2} />
      <p>my hname is : {user.firstName}</p>
      <p>my lastname is : {user.lastName}</p>
    </form>
  );
};

export default HookObject;
