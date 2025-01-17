import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <nav className="header">
      <ul className="link-container">
        <li>
          <Link to="pages/Home" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="pages/Posts" className="link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="pages/Users" className="link">
            Users
          </Link>
        </li>
        <li>
          <Link to="pages/NewPost" className="link">
            + New Post
          </Link>
        </li>
        <li>
          <Link to="pages/NewUser" className="link">
            + New User
          </Link>
        </li>
      </ul>
    </nav>
  );
}
