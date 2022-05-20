import React from "react";
import "./User.scss";

export default function User({ userData }) {
  return (
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
        <a href="users/userData.id" className="bold">{userData.name}</a>
        <p className="username">{userData.username}</p>
        <p>{userData.email}</p>
      </div>
    </div>
  );
}
