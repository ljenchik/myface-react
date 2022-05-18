import React, { useEffect, useState } from "react";
import Post from "../posts/Post";

export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result.results))
      .catch((error) => console.log("error"));
  }, []);
  return (
    <div>
      <h1>Posts Page</h1>
      {posts ? (
        posts.map((postData, index) => <Post postData={postData} key={index} />)
      ) : (
        <div>No Posts </div>
      )}
    </div>
  );
}
