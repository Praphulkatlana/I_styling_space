import React, { useEffect, useState } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const CheckoutPage = () => {
  const MyCart = React.useContext(CartContext);
  const { addToast } = useToasts();
  const [Total, setTotal] = useState(0);
  console.log(MyCart);
  // const AddToCart = (item) => {
  //   MyCart.dispatch({ type: "add", item });
  //   addToast("Item Added Successfully", {
  //     appearance: "success",
  //     autoDismiss: true,
  //     autoDismissTimeout: 1500,
  //   });
  // };

  const RemoveFromCart = (item) => {
    MyCart.dispatch({ type: "remove", id: item.id });
    addToast("Item Remove Successfully", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 1500,
    });
    setTotal(Total - item.price);
  };

  const Calculate_total = () => {
    let sum = 0;
    MyCart.Cart.map((item) => (sum = sum + parseInt(item.price)));
    setTotal(sum);
  };
  useEffect(() => {
    Calculate_total();
  }, []);

  return (
    <div>
      {MyCart.Cart.map((item) => {
        return (
          <div id="checkout_div">
            <div id="checkout_div_items">
              <img className="checkout_div_img" src={item.url} alt="img" />
              <div className="checkout_div_details">
                <p>
                  Offer Alert! Shop Now & Get Flat 50% Off At Marks & Spencer
                  Kidswear. Additionally, Sign up & Save Rs. 1000 on Purchase of
                  Rs. 3000. Hurry! Shop Now. New Spring Collection. Free
                  Delivery. No-fuss returns. Secure Payment. Top Quality.
                  Contactless Delivery.
                </p>
                <h1 className="checkout_price">
                  ${item.price}
                  <span>/-</span>
                </h1>

                <button
                  className="checkout_cncl_btn"
                  onClick={() => RemoveFromCart(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {Total !== 0 && !isNaN(Total) && (
        <div id="checkout_payment_div">
          <h2>Total:{Total}</h2>
          <button className="checkout_buy_btn">Proceed to pay</button>
        </div>
      )}
      {(Total === 0 || isNaN(Total)) && (
        <div id="checkout_nothing_cart_div">
          <div className="checkout_nothing_cart_div_1">
            <h1>Nothing in cart </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="100px"
              viewBox="0 0 24 24"
              width="100px"
              fill="#000000"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M13,10h-2V8h2V10z M13,6h-2V1h2V6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18 c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7 H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z" />
            </svg>
          </div>
          <button className="checkout_nothing_cart_home_btn">
            <Link to={`/`} className="CollectionLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="60px"
                viewBox="0 0 24 24"
                width="50px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
