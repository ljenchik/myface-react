import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import NewPost from "./pages/NewPost";
import NewUser from "./pages/NewUser";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="pages/Home" element={<Home />} />
          <Route path="pages/Posts" element={<Posts />} />
          <Route path="pages/Users" element={<Users />} />
          <Route path="pages/NewPost" element={<NewPost />} />
          <Route path="pages/NewUser" element={<NewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
