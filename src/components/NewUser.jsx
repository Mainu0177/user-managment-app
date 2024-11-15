import { useContext, useState } from "react"

import { UsersContext } from "../context/UsersContext"
import useUsersContext from "../hooks/useUsersContext"

// without context api
// const NewUser = ({ onAddNewUser }) => {
//     const [userName, setUserName] = useState('')

//     const handleUserNameChange = (e) =>{
//         setUserName(e.target.value);
//     }
//     const handleSubmint = (e) =>{
//         e.preventDefault(e);
//         const newUser = {id: new Date().getTime().toString(), userName: userName}
//         setUserName('')
//         onAddNewUser(newUser)
//     }
//   return (
//     <div>
//         <h2>User Registration</h2>
//         <form onSubmit={handleSubmint}>
//             <label htmlFor="text">User Name: </label>
//             <input type="text" name='userName' placeholder="Create users" onChange={handleUserNameChange} value={userName} required />
//             <button>Add User</button>
//         </form>
//     </div>
//   )
// }


// with context
const NewUser = () => {
    const [userName, setUserName] = useState('')
    // const {users, setUsers} = useContext(UsersContext)
    const {users, addUser, deleteUser} = useUsersContext(); // create custom hooks

    const handleUserNameChange = (e) =>{
        setUserName(e.target.value);
    }
    const handleSubmint = (e) =>{
        e.preventDefault(e);
        const newUser = {id: new Date().getTime().toString(), userName: userName}
        setUserName('')
        addUser(newUser)
    }
  return (
    <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmint}>
            <label htmlFor="text">User Name: </label>
            <input type="text" name='userName' placeholder="Create users" onChange={handleUserNameChange} value={userName} required />
            <button>Add User</button>
        </form>
    </div>
  )
}

export default NewUser