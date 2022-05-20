import React from "react";
import { useContext } from "react";
import { SelectedUserDataContext } from "../App";

export default function UserDetails() {
  const context = useContext(SelectedUserDataContext);

  return <div>{context.userData.name}</div>;
}
