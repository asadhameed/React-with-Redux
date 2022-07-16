import React from "react";
import classes from './UserList.module.css'
import Card from "../UI/Card";
const UserList =({users, onDeleteUser})=>{
    return<Card className={classes.userList}>
        <ul>
            {users.map(user=> <li key={user.id}>{user.name} ( {user.age} is old)  <button onClick={()=>onDeleteUser(user.id)} className={classes.close}>x</button> </li> )}
           
        </ul>
    </Card>
}

export default UserList;