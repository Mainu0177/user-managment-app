// 1. create context
// 2. provide context
// 3. use the context
import { createContext, useReducer, useState } from "react"
import { initialState } from "../reducer/usersReducer"
export const UsersContext = createContext({})

const UsersProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer, initialState) // I used reducer instead of useState
    const [users, setUsers] = useState([  
        {id: 1, userName: 'mainuddin'},
        {id: 2, userName: 'Fahim'},
    ])

    return (
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}


export default UsersProvider;
