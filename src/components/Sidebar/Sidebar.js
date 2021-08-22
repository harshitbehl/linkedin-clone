import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1544085311-11a028465b03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
          alt=""
          className="sidebar__bannerImage"
        />
        <Avatar
          className="sidebar__avatar"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        />
        <h3>Harshit Behl</h3>
        <p className="sidebar__designation">Full Stack Web Developer</p>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed your profile</p>
            <p className="sidebar__statNumber">71</p>
          </div>
          <div className="sidebar__stat">
            <p>Connections</p>
            <p className="sidebar__statNumber">2,110</p>
          </div>
          <p>Manage your network</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("web design and development")}
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("nodejs")}
        {recentItem("tailwind")}
        {recentItem("redux")}
      </div>
    </div>
  );
}

export default Sidebar;
