import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";

const MyContext = React.createContext({loggedIn: false});
export default function User({ userData, setSelectedUser }) {
  return (
    <Link to="pages/UserDetails">
    <div className="User" onClick = {() => setSelectedUser(userData)}>
      <img
        src={userData.profileImageUrl}
        className="profile-image"
        alt="user-profile-image"
      />
      <img
        src={userData.coverImageUrl}
        className="cover-image"
        alt="user-cover-image"
      />
      <div className="text-container">
        <p className="bold" >{userData.name}</p>
        <p className="username">{userData.username}</p>
        <p>{userData.email}</p>
      </div>
    </div>
    </Link>
  );
}
