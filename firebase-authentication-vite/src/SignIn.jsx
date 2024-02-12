// SignIn.jsx
import React from "react";
import { auth, provider } from "./firebase";

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(provider);
      console.log("Successfully signed in:", auth.currentUser.displayName);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
