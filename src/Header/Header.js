import React, { useContext } from "react";
import "./Header.css";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
const Header = () => {
  const MyCart = useContext(CartContext);
  return (
    <header>
      <div id="header_container">
        <div id="header_left">
          <div id="logo">
            <Link to="/" className="HeaderLink">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div id="header_right">
          <ul>
            <li>
              <Link to="/collection" className="HeaderLink">
                Collection
              </Link>
            </li>

            <li>
              <Link to="/contact" className="HeaderLink">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/signin" className="HeaderLink">
                {MyCart.Cart.isLogin?"SignOut":"SignIn"}
              </Link>
            </li>
          </ul>
          <div id="cart">
            {MyCart.Cart.products.length > 0 && <label>{MyCart.Cart.products.length}</label>}

            <Link to="/checkout" className="HeaderLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3rem"
                viewBox="0 0 24 24"
                width="3rem"
                fill="#eee6dc"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
