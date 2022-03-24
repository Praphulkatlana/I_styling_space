import React, { createContext, useReducer } from "react";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Signin from "./Pages/Signin";
import Contact from "./Pages/Contact";
import Particularcollection from "./Pages/Particularcollection";
import ProductPage from "./Pages/ProductPage";
import reducer from "./Store/StoreReducer";
import { ToastProvider } from "react-toast-notifications";
import CheckoutPage from "./Pages/CheckoutPage";
import FooterPage from "./Pages/FooterPage";

export const CartContext = createContext();
const initalCart = [];

const App = () => {
  const [CartItems, dispatch] = useReducer(reducer, initalCart);

  return (
    <Router>
      <CartContext.Provider value={{ Cart: CartItems, dispatch }}>
        <ToastProvider>
          <div id="MainDiv">
            <Header />
            <Routes>
              <Route extact path="/signin" element={<Signin />} />
              <Route extact path="/collection" element={<Collection />} />
              <Route extact path="/contact" element={<Contact />} />
              <Route extact path="/checkout" element={<CheckoutPage />} />
              <Route
                path="/collection/:id"
                element={<Particularcollection />}
              />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <FooterPage />
        </ToastProvider>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
