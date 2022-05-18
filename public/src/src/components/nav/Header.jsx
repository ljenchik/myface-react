import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <Link to="pages/Home">Home</Link>
      <ul>
        <li>
          <Link to="pages/Posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        {/* <li>
          <Link to="/posts/create">New Post</Link>
        </li>
        <li>
          <Link to="/users/create">New User</Link>
        </li> */}
      </ul>
    </nav>
  );
}
