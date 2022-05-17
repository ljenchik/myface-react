import Post from "./components/posts/Post";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result.results));
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      {posts ? (
        posts.map((postData, index) => <Post postData={postData} key={index} />)
      ) : (
        <div>No Posts </div>
      )}
    </div>
  );
}

export default App;
