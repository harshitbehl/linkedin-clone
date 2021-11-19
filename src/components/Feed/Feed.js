import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import "./Feed.css";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // First Render/ Mount Only
  useEffect(() => {
    const getPosts = () => {
      try {
        onSnapshot(
          query(collection(db, "posts"), orderBy("timestamp", "desc")),
          (snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            );
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "Full Stack Web Developer",
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };
  console.log(user.displayName);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar
            className="feed__avatar"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC05E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#FC9294"
          />
        </div>
      </div>

      <hr className="feed__divider" />

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
