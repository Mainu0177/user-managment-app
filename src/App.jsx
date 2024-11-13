// import { useState } from "react"
import Users from "./components/Users"
import NewUser from "./components/NewUser";
import UsersProvider from "./context/UsersContext";


// without context api
// function App() {
//   const [users, setUsers] = useState([
//     {id: 1, userName: 'mainuddin'},
//     {id: 2, userName: 'Fahim'},
//   ])
//   const handleDeleteUsers = (id) =>{
//     const filteredUsers = users.filter((user) => user.id != id);
//     setUsers(filteredUsers)
//   }

//   const handleAddNewUser = (newUser) =>{
//     setUsers((preveUsers) => [...preveUsers, newUser])
//   }
//   return (
//     <div>
//       <NewUser onAddNewUser = {handleAddNewUser} />
//     <Users users={users} onDeleteUsers = {handleDeleteUsers} />
//   </div>
//   )
// }


// with context api
function App() {
  // const [users, setUsers] = useState([  
  //   {id: 1, userName: 'mainuddin'},
  //   {id: 2, userName: 'Fahim'},
  // ])
  return (
    <UsersProvider>
      <div>
        <NewUser  />
        <Users />
      </div>
    </UsersProvider>
  )
}

export default App;