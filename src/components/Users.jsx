// import { useContext } from "react"

import User from "./User"
// import { UsersContext } from "../context/UsersContext"
import useUsersContext from "../hooks/useUsersContext";


// without context api
// const Users = ({ users,onDeleteUsers }) => {

//   return (
//     <section className="users">
//         {users.map((user) => (<User key={user.id} user={user}
//         onDeleteUser = {onDeleteUsers}
//         />))}
//     </section>
//     )
// }


// with context
const Users = () => {
    // const {users, setUsers} = useContext(UsersContext)
    const {users, setUsers} = useUsersContext(); // create custom hooks
    return (
        <section className="users">
            {users.map((user) => (<User key={user.id} user={user}
        />))}
        </section>
    )
  }

export default Users