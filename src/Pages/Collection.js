import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { useToasts } from "react-toast-notifications";
import { db } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";

const Collection = () => {
  const MyCart = React.useContext(CartContext);

  const [latest, setlatest] = useState([]);
  const [children, setchildren] = useState([]);
  const [mens, setmens] = useState([]);
  const [womens, setwomens] = useState([]);
  const [mix, setmix] = useState([]);
  const getData = async () => {
    let allSnapshot = await getDocs(collection(db, "Latest"));
    let allDocs = allSnapshot.docs.map((doc) => doc.data());
    setlatest([...allDocs]);

    allSnapshot = await getDocs(collection(db, "Children"));
    allDocs = allSnapshot.docs.map((doc) => doc.data());
    setchildren([...allDocs]);

    allSnapshot = await getDocs(collection(db, "Mens"));
    allDocs = allSnapshot.docs.map((doc) => doc.data());
    setmens([...allDocs]);

    allSnapshot = await getDocs(collection(db, "Womens"));
    allDocs = allSnapshot.docs.map((doc) => doc.data());
    setwomens([...allDocs]);

    allSnapshot = await getDocs(collection(db, "Mix"));
    allDocs = allSnapshot.docs.map((doc) => doc.data());
    setmix([...allDocs]);

    return null;
  };

  useEffect(() => {
    getData();
  }, []);

  const Allcollection = [
    {
      title: "latest",
      items: latest.slice(0, 5),
    },
    {
      title: "children",
      items: children.slice(0, 5),
    },

    {
      title: "women",
      items: womens.slice(0, 5),
    },
    {
      title: "mens",
      items: mens.slice(0, 5),
    },
    {
      title: "mix",
      items: mix.slice(0, 5),
    },
  ];

  const { addToast } = useToasts();

  const AddToCart = (item) => {
    if (MyCart.Cart.isLogin === false) {
      return addToast("Pleas login first", {
        appearance: "warning",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
    }
    MyCart.dispatch({ type: "add", item });
    addToast("Item Added Successfully", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 1500,
    });
  };
  return (
    <div id="collection_div">
      {Allcollection.map((collectionItem) => {
        return (
          <div id="collectionItem_div">
            <div id="collectionItem_div_1">
              <h1>{collectionItem.title}</h1>
              <button
                className="collection_btn"
                // onClick={() => ViewAllCollection(collectionItem.title)}
              >
                <Link
                  to={`/collection/${collectionItem.title}`}
                  className="CollectionLink"
                >
                  View all
                </Link>
              </button>
            </div>
            <div id="collectionItem_div_2">
              <div id="collectionItem_div_2_child">
                {collectionItem.items.map((item) => {
                  return (
                    <div id="collectionItem_div_2_child_img_items">
                      <Link
                        to={`/product/${item.id}`}
                        className="CollectionLink"
                      >
                        <img src={item.url} alt="img"></img>
                      </Link>

                      <button
                        className="collection_img_btn"
                        onClick={() => AddToCart(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.5rem"
                          viewBox="0 0 24 24"
                          width="1.5rem"
                          fill="#eee6dc"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collection;
