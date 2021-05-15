import React from "react";
import useResource from "./useResource";

const UserList = (props) => {
  const userList = useResource("users");

  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
