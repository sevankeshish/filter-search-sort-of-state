import ProductProviderReducer from "./Providers/productProviderReducer";

import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";

import "./App.css";

const App = () => {
  return (
    <div className="container" id="title">
      <ProductProviderReducer>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductProviderReducer>
    </div>
  );
};

export default App;
