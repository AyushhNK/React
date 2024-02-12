import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Firebase Authentication Demo</h1>
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
};

export default App;
