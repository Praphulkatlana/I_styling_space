import React,{useContext} from "react";
import { CartContext } from "../App";
import {useNavigate} from 'react-router-dom';
import { useToasts } from "react-toast-notifications";
import { auth, provider } from "../FireBase";
import { signInWithPopup } from "firebase/auth";
const Signin = () => {
 const navigate = useNavigate();
  const MyCart=useContext(CartContext)
  const { addToast } = useToasts();
  const signinoutPopup = () => {
    if(MyCart.Cart.isLogin){
      addToast("Sign Out Successfully", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 1500,
    });
      return(MyCart.dispatch({ type: "signout",item:false }))
    }
    signInWithPopup(auth, provider)
      .then((res) => {
        addToast("Sign In Successfully", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
      })
        MyCart.dispatch({ type: "signin",item:true })
         return  navigate('/', {replace: true});
        })
      .catch((er) =>  addToast(er.message, {
      appearance: "error",
      autoDismiss: true,
      autoDismissTimeout: 4000,
      }));
  };

  return (
    <div id="signinPage">
      <button className="signBtn" onClick={() => signinoutPopup()}>
        {MyCart.Cart.isLogin?"SignOut":"SignIn"}
      </button>
    </div>
  );
};

export default Signin;
