import React from "react";


export default function User({ userData }) {
  return (
    <div className="User">
      <p>{userData.name}</p>
      <img src={userData.profileImageUrl} alt="user-profile-image" />
      <img src={userData.coverImageUrl} alt="user-cover-image" />
      <p>{userData.username}</p>
      <p>{userData.email}</p>
    </div>
  );
}