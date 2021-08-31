import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

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
