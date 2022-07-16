import React, { useState } from "react";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

const App = () => {
  const [users , setUser] = useState([])
   const addNewUser=(user)=>setUser(p=>[...p, user])
   
   const deleteUser=(id)=>setUser(p=> [...p.filter(u=> u.id !== id)])
  return (
    <>
      <AddUser addNewUser={addNewUser}/>
      {users.length !==0 && <UserList users={users}  onDeleteUser={deleteUser}/>}  
    </>
  );
};

export default App;
