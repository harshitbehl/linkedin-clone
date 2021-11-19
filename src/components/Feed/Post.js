import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import InputOption from "./InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} className="post__avatar" />
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <hr className="post__divider" />

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" />
        <InputOption Icon={ChatOutlined} title="Comment" />
        <InputOption Icon={ShareOutlined} title="Share" />
        <InputOption Icon={SendOutlined} title="Send" />
      </div>
    </div>
  );
}

export default Post;
