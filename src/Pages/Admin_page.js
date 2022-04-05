import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FireBase";
import { useToasts } from "react-toast-notifications";

const Admin_page = () => {
  const { addToast } = useToasts();

  const [name, setname] = useState("");
  const [details, setdetails] = useState("");
  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [url, seturl] = useState("");
  const [category, setcategory] = useState("");

  const onCategoryChange = (e) => {
    setcategory(e.target.value);
  };

  const Addproduct = async (e) => {
    e.preventDefault();

    if (id && details && url && price && category) {
      try {
        await setDoc(doc(db, "All", id), {
          id: id,
          name: name,
          details: details,
          url: url,
          price: price,
        });
        await setDoc(doc(db, category, id), {
          id: id,
          name: name,
          details: details,
          url: url,
          price: price,
        });

        addToast("product added Successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 1500,
        });
        setname("");
        setid("");
        setdetails("");
        setprice("");
        seturl("");
      } catch (e) {
        console.log(e);
        addToast("Somthing went wrong", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 1500,
        });
      }
    } else {
      console.log("else");
      addToast("Add all fields first", {
        appearance: "warning",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
    }
  };

  return (
    <div id="admin_page">
      <form onSubmit={Addproduct}>
        <h1 className="middle_text">Add Product</h1>
        <select value={category} onChange={onCategoryChange}>
          <option disabled selected value={""}>
            Category:-
          </option>
          <option value={"Children"}>Children</option>
          <option value={"Mens"}>Mens</option>
          <option value={"latest"}>latest</option>
          <option value={"Mix"}>Mix</option>
          <option value={"Womens"}>Womens</option>
        </select>
        <br></br>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="form_item"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="id"
          name="id"
          className="form_item"
          value={id}
          onChange={(e) => setid(e.target.value)}
          required
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="details"
          name="details"
          className="form_item"
          value={details}
          onChange={(e) => setdetails(e.target.value)}
          required
        ></input>
        <br></br>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="form_item"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          required
        ></input>
        <br></br>
        <textarea
          placeholder="url"
          name="url"
          className="form_item"
          value={url}
          onChange={(e) => seturl(e.target.value)}
        ></textarea>
        <br></br>
        <button className="form_btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Admin_page;
