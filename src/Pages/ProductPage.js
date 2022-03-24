import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";
import { useToasts } from "react-toast-notifications";
import { db } from "../FireBase";
import { doc, getDoc } from "firebase/firestore";

const ProductPage = () => {
  const params = useParams();
  const [product, setproduct] = useState({});
  const getproduct = async () => {

    const docRef = doc(db, "all", params.id);
    let item = await getDoc(docRef);
    item = item.data();
    if (item !== undefined) {
      console.log("if");
      setproduct(item);
    } else {
      setproduct({});
    }

    return null;
  };

  const MyCart = React.useContext(CartContext);

  const { addToast } = useToasts();

  const AddToCart = (item) => {
    MyCart.dispatch({ type: "add", item });
    addToast("Item Added Successfully", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 1500,
    });
  };

  useEffect(() => {
    getproduct();
    console.log(product);
  }, []);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div id="product_NA_div">
          <h1>Cuurently product not available !!</h1>
        </div>
      ) : (
        <div id="product_page_div">
          <div id="product_page_left_div">
            <img src={product.url} alt="img" />
          </div>
          <div id="product_page_right_div">
            <div id="product_page_right_div_items">
              <p>{product.details}</p>
              <h1>{product.price ? `$${product.price}` : ""}</h1>
              {product && (
                <button
                  className="product_btn"
                  onClick={() => AddToCart(product)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="4rem"
                    viewBox="0 0 24 24"
                    width="5.5rem"
                    fill="#eee6dc"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
