// import { useContext } from "react";
// import { UsersContext } from "../context/UsersContext";
import useUsersContext from "../hooks/useUsersContext";


// without context api
const User = ({ user }) => {
    const {id, userName} = user;
    // const {users, setUsers} = useContext(UsersContext)
    const {users, addUser, deleteUser} = useUsersContext(); // create custom hooks

    const handleDelete = (id) =>{
        deleteUser(id)
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