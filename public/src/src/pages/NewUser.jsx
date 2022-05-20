import React from "react";
import { useState } from "react";
import "./NewUser.scss";

export default function NewUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");

  function submitNewUser(event) {
    event.preventDefault();
    if (canSubmit()) {
      fetch("http://localhost:3001/users/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          username: username,
          email: email,
          coverImageUrl: coverImageUrl,
          profileImageUrl: profileImageUrl,
        }),
      })
        .then((Response) => console.log(Response))
        .catch((error) => console.log(error));
    }
  }

  function canSubmit() {
    let nameRegex = /^[a-zA-Z ]+$/;
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regex = /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/gim;
    return (
      username.length < 20 &&
      username.length > 2 &&
      name.match(nameRegex) &&
      coverImageUrl.match(regex) &&
      profileImageUrl.match(regex) &&
      email.match(emailRegex)
    );
  }

  return (
    <div className="NewUser">
      <h1>New User</h1>

      <form className="grid-container">
        <label for="name">Your name:</label>
        <input
          required
          className="img-url-box"
          name="name"
          type="text"
          placeholder="Type your name..."
          onChange={(e) => setName(e.target.value)}
        />
        <label for="username">Your username:</label>
        <input
          required
          className="img-url-box"
          name="username"
          type="text"
          placeholder="Type your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="email">Your email:</label>
        <input
          required
          className="img-url-box"
          name="email"
          type="email"
          placeholder="Type your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="coverImageUrl">Your cover image Url:</label>
        <input
          className="img-url-box"
          required
          type="url"
          name="coverImageUrl"
          placeholder="https://myImage.jpg"
          onChange={(e) => setCoverImageUrl(e.target.value)}
        />
        <label for="profileImageUrl">Your profile image Url:</label>
        <input
          className="img-url-box"
          required
          type="url"
          name="profileImageUrl"
          placeholder="https://myImage.jpg"
          onChange={(e) => setProfileImageUrl(e.target.value)}
        />

        <button type="submit" value="Submit" onClick={submitNewUser}>
          Post
        </button>
      </form>
    </div>
  );
}
