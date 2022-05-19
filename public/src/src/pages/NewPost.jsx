import React from "react";
import { useState } from "react";
import "./NewPost.scss";

export default function NewPost() {
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  function submitNewPost(event) {
    event.preventDefault();

    if (canSubmit()) {
      //do post request
      console.log(imageUrl);
      console.log(message);

      fetch("http://localhost:3001/posts/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message, imageUrl: imageUrl }),
      })
        .then((Response) => console.log(Response))
        .catch((error) => console.log(error));
    }
  }

  function canSubmit() {
    let regex = /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/gim;
    return message.length > 0 && imageUrl.length > 0 && imageUrl.match(regex);
  }

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
          onChange={(e) => setMessage(e.target.value)}
        />
        <label for="imageUrl">Your image Url:</label>
        <input
          className="img-url-box"
          required
          type="url"
          name="imageUrl"
          placeholder="https://myImage.jpg"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit" value="Submit" onClick={submitNewPost}>
          Post
        </button>
      </form>
    </div>
  );
}
