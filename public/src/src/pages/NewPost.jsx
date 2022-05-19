import React from "react";
import "./NewPost.scss";

export default function NewPost() {
  return (
    <div className="NewPost">
      <h1>New post</h1>
      <form className="grid-container">
        <label for="message">Your message:</label>
        <textarea
          required
          name="message"
          rows="5"
          cols="30"
          placeholder="Type your message here..."
        />
        <label for="imageUrl">Your image Url:</label>
        <input
          className="img-url-box"
          required
          type="url"
          name="imageUrl"
          placeholder="https://myImage.jpg"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
