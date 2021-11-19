import React from "react";
import "./NavItem.css";

function NavItem({ title, icon, avatar, onClick }) {
  return (
    <li onClick={onClick} className="header__navitem">
      {icon && <div>{icon}</div>}
      {avatar && <img className="navitem__avatar" src={avatar} alt="avatar" />}
      <div className="navitem__title">{title}</div>
    </li>
  );
}

export default NavItem;
