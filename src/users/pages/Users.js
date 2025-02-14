import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "kiki",
      image: "https://mastdp.com/img/cute-dp-for-girls/cute-dp-for-girls.webp",
      places: "3",
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
