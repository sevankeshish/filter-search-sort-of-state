import { BiTrash } from "react-icons/bi";

import styles from "./product.module.css";

const Product = ({ product, onChange, onDecrement, onIncrement, onDelete }) => {
  return (
    <div className={styles.product}>
      <p>Product name : {product.title}</p>
      <p>Product price: {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
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
        {product.quantity <= 1 ? <BiTrash /> : "-"}
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};
export default Product;
