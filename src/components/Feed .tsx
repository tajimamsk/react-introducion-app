import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import TweetInput from "./TweetInput";
import styles from "./Feed.module.css";
import Post from "./Post";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);

  // データの取得(初回のみ)
  useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        );
      });
    // クリーンアップ時に実行
    return () => {
      unSub();
    };
  }, []);

  return (
    <div className={styles.feed}>
      <TweetInput />
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          avatar={post.avatar}
          image={post.image}
          text={post.text}
          timestamp={post.timestamp}
          username={post.username}
        />
      ))}
    </div>
  );
};

export default Feed;
