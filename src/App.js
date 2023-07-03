import { Component, createContext, useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";

import "./App.css";
import ClassCounter2 from "./components/ClassCounter2";
import FunctionBase from "./components/FunctionBase";
import ClickComponent from "./components/HOCExample/Click";
import HoverComponent from "./components/HOCExample/Hover";
import Parent from "./components/PureComponent/Parent";
import ClassRef from "./components/Ref/ClassRef";
import FunctionalRef from "./components/Ref/FunctionalRef";
import UseRefExample from "./components/Ref/UseRefExample";
import CounterProvider from "./Context/CounterProvider";
import CounterOne from "./Context/CounterOne";
import CountReducer from "./Reducer/CountReducer";
import CountObject from "./Reducer/CounterObject";
import ProductProviders, {
  useProduct,
  useProductAction,
} from "./Providers/productProviders";
import ProductProviderReducer from "./Providers/productProviderReducer";
import Filter from "./components/Filter/Filter";

// export const UserContext = createContext();
// export const WebContext = createContext();
// class App extends Component {
//   state = {
//     products: [
//       { id: 1, title: "React js", price: "$99", quantity: 1 },
//       { id: 2, title: "Vue js", price: "$89", quantity: 1 },
//       { id: 3, title: "Angular", price: "$79", quantity: 1 },
//     ],
//   };
const App = () => {
  // const products = useProduct();
  // const setProducts = useProductAction();

  // render() {
  return (
    // <WebContext.Provider value="fronthooks">
    //   <UserContext.Provider value="sevan">
    <div className="container" id="title">
      {/* <CounterProvider> */}
      {/* <p>welcome to the context</p>
          <CounterOne /> */}
      {/* <CountReducer /> */}
      {/* <CountObject /> */}
      {/* </CounterProvider> */}
      {/* <UseRefExample /> */}
      {/* <ClassRef /> */}
      {/* <FunctionalRef /> */}
      {/* <Parent /> */}
      {/* <ClickComponent name="sevan" />
        <HoverComponent /> */}
      {/* <ClassCounter2 /> */}
      {/* <FunctionBase /> */}
      {/* <ProductProviders> */}
      <ProductProviderReducer>
        <NavBar
        // totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        // totalItems={products.length}
        />
        <Filter />
        <ProductList
        // products={products}
        // onRemove={removeHandler}
        // onIncrement={incrementHandler}
        // onDecrement={decrementHandler}
        // onChange={changeHandler}
        />
      </ProductProviderReducer>
      {/* </ProductProviders> */}
    </div>
    //   {/* </UserContext.Provider>
    // </WebContext.Provider> */}
  );
  // }
};

export default App;

// import CounterOne from "./Context/CounterOne";
// import CounterProvider from "./Context/CounterProvider";

// const App = () => {
//   return (
//     <div>
//       <CounterProvider>
//         <p>Welcome to Context</p>
//         <CounterOne />
//       </CounterProvider>
//     </div>
//   );
// };

// export default App;
