import { useState } from "react";
import { useProductAction } from "../../Providers/productProviderReducer";

const Filter = () => {
  const dispatch = useProductAction();

  const [value , setValue] = useState("")

  const changeHandler = (e) => {
    dispatch({ type: "filter", event:e })
    setValue(e.target.value)
  }

  return (
    <div>
      <p>filter products bassed on: </p>
      <div>
        order by
        <select onChange={changeHandler} value={value}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
