import React, { useEffect, useState } from "react";
import "./Pages.css";
import Slideshow from "./Slideshow";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { db } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";
const Home = () => {
  const MyCart = React.useContext(CartContext);
  const [Items, setItems] = useState([]);
  const getData = async () => {
    const allSnapshot = await getDocs(collection(db, "All"));
    const allDocs = allSnapshot.docs.map((doc) => doc.data());
    setItems([...allDocs]);
    return null;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="home_div">
      <div id="scrolling_frame">
        <Slideshow />
      </div>
      <div id="home_items">
        {Items.slice(0, 8).map((item) => {
          return (
            <div id="item_div">
              <Link to={`/product/${item.id}`} className="CollectionLink">
                <img src={item.url} alt="photo" className="enlarge_on_hover" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
