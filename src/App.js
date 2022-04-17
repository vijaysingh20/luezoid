import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

export const cartSize = createContext();

function App() {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://api.products.luezoid.com/products?page=1", {
      method: "GET",
      headers: {
        Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.items));
  }, []);

  return (
    <div className="App">
      <cartSize.Provider value={cartItems.length}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={data}
                setSelectedProduct={setSelectedProduct}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          ></Route>
          <Route
            path="/details"
            element={<Details selectedProduct={selectedProduct} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          ></Route>
        </Routes>
        <Footer />
      </cartSize.Provider>
    </div>
  );
}

export default App;
