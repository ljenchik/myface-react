import Post from "./components/posts/Post";
import { useEffect, useState, createContext } from "react";
import "./App.css";

const PostsContext = createContext();

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result.results))
      .catch((error) => console.log("error"));
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostsContext.Provider value={posts}>
        {posts ? (
          posts.map((postData, index) => (
            <Post postData={postData} key={index} />
          ))
        ) : (
          <div>No Posts </div>
        )}
      </PostsContext.Provider>
    </div>
  );
}

export default App;
