import { useProduct } from "../../Providers/productProviders";
import styles from "./navBar.module.css";

const NavBar = () => {
  const products = useProduct();
  // const totalItems = products.filter((p) => p.quantity > 0).length;
  // const totalItems = products.length;
  const totalItems = products ? products.length : 0;

  return (
    <header className={styles.navBar}>
      <h2>fronthooks.ir shopping</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default NavBar;
