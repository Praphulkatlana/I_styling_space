import React from "react";
import { auth, provider } from "../FireBase";
import { signInWithPopup } from "firebase/auth";
const Signin = () => {
  const sigin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((er) => alert(er.message));
  };

  return (
    <div id="signinPage">
      <button className="signBtn" onClick={() => sigin()}>
        Sign-In
      </button>
    </div>
  );
};

export default Signin;
