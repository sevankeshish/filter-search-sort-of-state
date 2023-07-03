import React, { Component } from "react";
import {
  useProductAction,
  useProducts,
} from "../../Providers/productProviderReducer";
import { useProduct } from "../../Providers/productProviders";
import Product from "../Product/Product";
import "./styles.css";

const ProductList = () =>
  //   {
  //   onRemove,
  //   onIncrement,
  //   onDecrement,
  //   onChange,
  //   // products,
  // }
  {
    const products = useProducts();
    const dispatch = useProductAction();

    //useContext
    // const products = useProduct();
    // const { changeHandler, removeHandler, incrementHandler, decrementHandler } =
    //   useProductAction();

    return (
      <div>
        {/* {!products.length && <p>go to shooping cart</p>} */}
        {!products.length ? <p>go to shopping cart</p> : null}
        <div className="ProductList-style">
          {products.map((e) => {
            return (
              //useContext
              // <Product
              //   // title={e.title}
              //   // price={e.price}
              //   product={e}
              //   key={e.id}
              //   onDelete={() => removeHandler(e.id)}
              //   onIncrement={() => incrementHandler(e.id)}
              //   onDecrement={() => decrementHandler(e.id)}
              //   onChange={(event) => changeHandler(event, e.id)}
              // />
              <Product
                // title={e.title}
                // price={e.price}
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
