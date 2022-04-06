import React, { useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { auth, provider } from "../FireBase";
import { signInWithPopup } from "firebase/auth";
import Admin_page from "./Admin_page";

const Signin = () => {
  const [idAdmin, setidAdmin] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [adminForm, setadminForm] = useState(false);
  const navigate = useNavigate();
  const MyCart = useContext(CartContext);
  const { addToast } = useToasts();
  const signinoutPopup = () => {
    if (MyCart.Cart.isLogin) {
      addToast("Sign Out Successfully", {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
      setidAdmin(false);
      return MyCart.dispatch({ type: "signout", item: false });
    }
    signInWithPopup(auth, provider)
      .then(() => {
        addToast("Sign In Successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 2000,
        });
        MyCart.dispatch({ type: "signin", item: true });
        return navigate("/", { replace: true });
      })
      .catch((er) => {
        alert(er.message);
        console.log(er.message);
        addToast(er.message, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 4000,
        });
      });
  };
  const adminFormToggle = () => {
    setadminForm(true);
  };

  const AdminLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setidAdmin(true);
        addToast("Successfully login as an admin", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 2500,
        });
        MyCart.dispatch({ type: "signin", item: true });
      })
      .catch(() => {
        addToast("Error while login please check your credentials", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 4500,
        });
      });

    // to create user as an admin
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed
    //     console.log(userCredential);
    //     const user = userCredential.user;
    //     setidAdmin(true);
    //     // ...
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // ..
    //   });
  };
  return (
    <div id="signinPage">
      <button className="signBtn" onClick={() => signinoutPopup()}>
        {MyCart.Cart.isLogin ? "SignOut" : "SignIn"}
      </button>
      {!adminForm && MyCart.Cart.isLogin && (
        <button className="admin_btn" onClick={adminFormToggle}>
          Admin Login
        </button>
      )}
      {idAdmin ? <Admin_page /> : ""}

      {adminForm && !idAdmin && MyCart.Cart.isLogin && (
        <form onSubmit={AdminLogin} id="admin_form">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="form_item"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form_item"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          ></input>
          <br></br>
          <button className="form_btn" type="submit">
            Login As Admin
          </button>
        </form>
      )}
    </div>
  );
};

export default Signin;
