import { createContext, useContext, useReducer } from "react";
import _ from 'lodash'
import { ProductsData } from "../db/Products";

const ProductReducer = createContext();
const ProductReducerDespatch = createContext();

// const initialState = [
//   { id: 1, title: "React js", price: "$99", quantity: 1 },
//   { id: 2, title: "Vue js", price: "$89", quantity: 1 },
//   { id: 3, title: "Angular", price: "$79", quantity: 1 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "change": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;

      return updatedProducts;
    }
    case "increment": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "decrement": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;

        return updatedProducts;
      }
    }
    case "delete":
      const filteredProducts = state.filter((e) => e.id !== action.id);
      return filteredProducts;
    case "filter":{
      const value = action.selectedOption.value
      if(value === ""){
        return ProductsData
      } else {
        const updatedProducts = ProductsData.filter((p)=> p.availableSizes.indexOf(value) >= 0)
        return updatedProducts
      }
    }
    // _.orderBy(chars, ['name'],['asc']);
    case "sort" :{
      const value = action.selectedOption.value
      const products = [...state]
     if(value === "lowest") { 
      return _.orderBy(products, ['price'],['asc']);
    //   const sortedProducts = products.sort ((a, b) => {
    //   if (a.price > b.price) {
    //     return 1;
    //   }
    //   if (a.price < b.price) {
    //     return -1;
    //   }
    //   return 0;
    // })
    // return sortedProducts
  } else {
    return _.orderBy(products, ['price'],['desc']);

  //   const sortedProducts = products.sort ((a, b) => {
  //   if (a.price < b.price) {
  //     return 1;
  //   }
  //   if (a.price > b.price) {
  //     return -1;
  //   }
  //   return 0;
  // })
  // return sortedProducts
     } 
    }
    default:
      return state;
  }
};

const ProductProviderReducer = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, ProductsData);

  return (
    <>
      <ProductReducer.Provider value={products}>
        <ProductReducerDespatch.Provider value={dispatch}>
          {children}
        </ProductReducerDespatch.Provider>
      </ProductReducer.Provider>
    </>
  );
};

export default ProductProviderReducer;

export const useProducts = () => useContext(ProductReducer);
export const useProductAction = () => {
  return useContext(ProductReducerDespatch);
};
