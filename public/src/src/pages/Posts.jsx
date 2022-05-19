import React, { useEffect, useState } from "react";
import Post from "../posts/Post";
import "./Posts.scss";

export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result.results))
      .catch((error) => console.log("error"));
  }, []);
  return (
    <div className="Posts">
      <h1 className="post-header">Posts Page</h1>
      <div className="grid-container">
        {posts ? (
          posts.map((postData, index) => (
            <Post postData={postData} key={index} />
          ))
        ) : (
          <div>No Posts </div>
        )}
      </div>
    </div>
  );
}
