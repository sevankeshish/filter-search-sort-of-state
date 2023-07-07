import { useState } from "react";
import { useProductAction } from "../../Providers/productProviderReducer";
import Select from 'react-select'

import styles from "./filter.module.css"

const options = [
  {value:"" , label: "All"},
  {value:"XS" , label: "XS"},
  {value:"S" , label: "S"},
  {value:"M" , label: "M"},
  {value:"L" , label: "L"},
  {value:"XL" , label: "XL"},
  {value:"XXL" , label: "XXl"},
]

const Filter = () => {
  const dispatch = useProductAction();

  const [value , setValue] = useState("")

  const changeHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "filter", selectedOption })
    setValue(selectedOption)
  }

  return (
    <div className={styles.filter}>
      <p>filter products bassed on: </p>
      <div className={styles.selectContainer}>
        <span> order by </span>
        {/* <select onChange={changeHandler} value={value}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
        </select> */}
        <Select value={value} onChange={changeHandler} options={options} className={styles.select}/>
      </div>
    </div>
  );
};

export default Filter;
