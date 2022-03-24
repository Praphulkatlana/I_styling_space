import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../FireBase";
import { collection, getDocs } from "firebase/firestore";

function Particularcollection() {
  const [collectionItems, setcollectionItems] = useState([]);
  const params = useParams();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log(params.id);
    let allSnapshot = await getDocs(collection(db, params.id));
    let allDocs = allSnapshot.docs.map((doc) => doc.data());
    setcollectionItems([...allDocs]);
    console.log(collectionItems);
  };

  return (
    <div id="particularCollection_main_div">
      {params.id}
      <div id="ParticularCollection_div">
        {collectionItems.map((item) => {
          return (
            <div id="ParticularCollection_img">
              <img src={item.url} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Particularcollection;
