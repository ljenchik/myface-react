import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SelectedUserDataContext } from "../App";
import "./User.scss";

export default function User({ userData }) {
  const context = useContext(SelectedUserDataContext);

  function updateSelectedUser() {
    context.setUserData(userData);
  }

  return (
    <Link to="/pages/UserDetails" onClick={updateSelectedUser}>
      <div className="User">
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
          <p className="bold">{userData.name}</p>
          <p className="username">{userData.username}</p>
          <p>{userData.email}</p>
        </div>
      </div>
    </Link>
  );
}
