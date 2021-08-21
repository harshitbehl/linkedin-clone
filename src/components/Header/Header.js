import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header">
      <nav className="nav main-container">
        <div className="header__left">
          <LinkedInIcon style={{ color: "#0B65C2", fontSize: "4.5rem" }} />
          <div className="header__search">
            <SearchIcon style={{ color: "#606163", fontSize: "2rem" }} />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <NavBar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
