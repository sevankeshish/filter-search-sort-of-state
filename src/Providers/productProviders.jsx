import { createContext, useContext, useState } from "react";

const productContext = createContext();
const productContextDispatcher = createContext();

const ProductProviders = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, title: "React js", price: "$99", quantity: 1 },
    { id: 2, title: "Vue js", price: "$89", quantity: 1 },
    { id: 3, title: "Angular", price: "$79", quantity: 1 },
  ]);
  return (
    <productContext.Provider value={products}>
      <productContextDispatcher.Provider value={setProducts}>
        {children}
      </productContextDispatcher.Provider>
    </productContext.Provider>
  );
};

export default ProductProviders;

export const useProduct = () => useContext(productContext);
export const useProductAction = () => {
  const setProducts = useContext(productContextDispatcher);
  const products = useContext(productContext);

  const removeHandler = (id) => {
    const filteredProducts = products.filter((e) => e.id !== id);
    setProducts(filteredProducts);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((p) => p.id === id);
    const product = { ...products[index] };
    product.quantity++;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((p) => p.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      const updatedProducts = [...products];
      product.quantity--;
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((p) => p.id === id);
    const product = { ...products[index] };
    product.title = event.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  return { changeHandler, removeHandler, incrementHandler, decrementHandler };
};
