import Post from "./components/posts/Post";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result));
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {posts.map((postData) => (
        <Post postData={postData} />
      ))}
    </div>
  );
}

export default App;
