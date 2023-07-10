import { useState } from "react";
import { useProductAction } from "../../Providers/productProviderReducer";
import styles from "./search.module.css";

const SearchBar = ({ searchFilterValue }) => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: searchFilterValue });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div className={styles.formControl}>
      <input
        type="text"
        placeholder="search for ..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
