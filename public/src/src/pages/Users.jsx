import User from "../users/User";
import React, { useEffect, useState } from "react";
import "./Users.scss"

export default function Users() {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);
  
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((result) => setUsers(result.results))
      .catch((error) => console.log("error"));
  }, []);
  return <div > 
    <h1 className="users-header">Users Page</h1>
    <div className="grid-container">
    {users ? (
        users.map((userData, index) => <User userData={userData} key={index} setSelectedUser = {setSelectedUser}/>)
      ) : (
        <div>No Users </div>
      )}
      </div>
  </div>;

}
