import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photUrl: userAuth.photoURL,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body main-container">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
