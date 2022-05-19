import React from "react";
import "./Post.scss";

export default function Post({ postData }) {
  return (
    <div className="Post">
      <img src={postData.imageUrl} alt="post" className="post-image" />
      <div className="text-container">
        <p className="bold">{postData.postedBy.name}</p>
        <p>{postData.message}</p>
      </div>
      {/* <p>{postData.postedBy.username}</p>
      <p>{postData.postedBy.email}</p> */}
    </div>
  );
}
