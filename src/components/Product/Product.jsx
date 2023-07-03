import { useContext, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
// import { UserContext, WebContext } from "../../App";

import styles from "./product.module.css";

const Product = ({
  product,
  onChange,
  onDecrement,
  onIncrement,
  onDelete,
  // title,
}) => {
  // const user = useContext(UserContext);
  // console.log(user);

  // const userWeb = useContext(WebContext);
  // console.log(userWeb);

  return (
    <div className={styles.product}>
      <p>Product name : {product.title}</p>
      <p>Product price: {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}
      <button
        className={`${styles.button} ${styles.increment}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {/* {product.quantity <=1 ? <BiTrash/>} */}
        {product.quantity <= 1 ? <BiTrash /> : "-"}
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};
export default Product;
