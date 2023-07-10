import { useState } from "react";
import { useProductAction } from "../../Providers/productProviderReducer";
import SelectComponent from "../../common/Select/Select";

import styles from "./filter.module.css";
import SearchBar from "../../common/Search/Search";

const filterOptions = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXl" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductAction();

  const [filter, setFilter] = useState("");
  const [sortValue, setSortValue] = useState("");

  const filterHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sortValue });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSortValue(selectedOption);
  };

  return (
    <section>
      <SearchBar searchFilterValue={filter} />
      <div className={styles.filter}>
        <p>filter products bassed on: </p>
        <SelectComponent
          title="sort by size"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
          className={styles.select}
        />
        <SelectComponent
          title="sort by price"
          value={sortValue}
          onChange={sortHandler}
          options={sortOptions}
        />
        {/* <select onChange={changeHandler} value={value}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XLL">XLL</option>
          </select> */}
      </div>
    </section>
  );
};

export default Filter;
