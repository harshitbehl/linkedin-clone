import React from "react";
import "./NavBar.css";
import NavItem from "./NavItem";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";
import NotificationsIcon from "@material-ui/icons/Notifications";

function NavBar() {
  return (
    <ul className="header__navbar">
      <NavItem
        title="Home"
        icon={<HomeIcon style={{ fontSize: "2.8rem" }} />}
      />
      <NavItem
        title="My Network"
        icon={<SupervisorAccountIcon style={{ fontSize: "2.8rem" }} />}
      />
      <NavItem
        title="Jobs"
        icon={<BusinessCenterIcon style={{ fontSize: "2.8rem" }} />}
      />
      <NavItem
        title="Messaging"
        icon={<TextsmsRoundedIcon style={{ fontSize: "2.8rem" }} />}
      />
      <NavItem
        title="Notifications"
        icon={<NotificationsIcon style={{ fontSize: "2.8rem" }} />}
      />
      <NavItem
        title="Me"
        avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
      />
    </ul>
  );
}

export default NavBar;
