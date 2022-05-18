import User from "../components/users/User";
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((result) => setUsers(result.results))
      .catch((error) => console.log("error"));
  }, []);
  return <div>Users page
    {users ? (
        users.map((userData, index) => <User userData={userData} key={index} />)
      ) : (
        <div>No Users </div>
      )}
  </div>;

}
