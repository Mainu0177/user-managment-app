// import { useContext } from "react";
// import { UsersContext } from "../context/UsersContext";
import useUsersContext from "../hooks/useUsersContext";


// without context api
const User = ({ user }) => {
    const {id, userName} = user;
    // const {users, setUsers} = useContext(UsersContext)
    const {users, setUsers} = useUsersContext(); // create custom hooks

    const handleDelete = (id) =>{
        const filteredUsers = users.filter((user) => user.id != id);
        setUsers(filteredUsers)
    }
  return (
    <article className="user">
        <h2>{id}</h2>
        <p>{userName}</p>
        <button onClick={() => {handleDelete(id)}}>Delete</button>
  </article>    
  )
}

// with context api

export default User