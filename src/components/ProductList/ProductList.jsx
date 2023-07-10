import React from "react";

import {
  useProductAction,
  useProducts,
} from "../../Providers/productProviderReducer";

import Product from "../Product/Product";

import "./styles.css";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductAction();

  return (
    <div>
      {!products.length ? <p>go to shopping cart</p> : null}
      <div className="ProductList-style">
        {products.map((e) => {
          return (
            <Product
              product={e}
              key={e.id}
              onDelete={() => dispatch({ type: "delete", id: e.id })}
              onIncrement={() => dispatch({ type: "increment", id: e.id })}
              onDecrement={() => dispatch({ type: "decrement", id: e.id })}
              onChange={(event) =>
                dispatch({ type: "change", id: e.id, event })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
