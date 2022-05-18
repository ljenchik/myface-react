import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="pages/Home" element={<Home />} />
          <Route path="pages/Posts" element={<Posts />} />
          <Route path="pages/Users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
