import React from "react";
import "./Post.scss";

export default function Post({ postData }) {
  return (
    <div className="Post">
      <p>{postData.postedBy.name}</p>
      <img src={postData.imageUrl} alt="post" className="post-image" />
      <p>{postData.message}</p>
      <p>{postData.postedBy.username}</p>
      <p>{postData.postedBy.email}</p>
    </div>
  );
}
