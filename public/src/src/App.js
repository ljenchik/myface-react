import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import NewPost from "./pages/NewPost";
import NewUser from "./pages/NewUser";
import UserDetails from "./pages/UserDetails";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

export const SelectedUserDataContext = React.createContext({
  userData: null,
  setUserData: null,
});

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <SelectedUserDataContext.Provider
        value={{ userData: selectedUser, setUserData: setSelectedUser }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="pages/Home" element={<Home />} />
            <Route path="pages/Posts" element={<Posts />} />
            <Route path="pages/Users" element={<Users />} />
            <Route path="pages/NewPost" element={<NewPost />} />
            <Route path="pages/NewUser" element={<NewUser />} />
            <Route path="pages/UserDetails" element={<UserDetails />} />
          </Routes>
        </Router>
      </SelectedUserDataContext.Provider>
    </div>
  );
}

export default App;
