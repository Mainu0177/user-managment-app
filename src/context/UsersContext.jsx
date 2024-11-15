// 1. create context
// 2. provide context
// 3. use the context
import { createContext, useReducer } from "react"
import { initialState, reducer } from "../reducer/usersReducer"
export const UsersContext = createContext({})

const UsersProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer, initialState) // I used reducer instead of useState

    const value = {
        users: state.users,
        addUser: (newUser) =>{
            dispatch({type: 'ADD_USER', payload: newUser})
        },
        deleteUser: (id) =>{
            dispatch({type: 'DELETE_USER', payload: id})
        },
    }

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    )
}


export default UsersProvider;
