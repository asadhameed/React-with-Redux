import React, { useState } from "react";
import ResourceList from "./ResourceList";
import Users from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <Users />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todo</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};
export default App;
