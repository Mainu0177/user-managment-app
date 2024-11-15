/* eslint-disable no-case-declarations */


export const initialState = {
    users: [
        { id: 1, userName: 'Mainuddin' },
        { id: 2, userName: 'Fahim', },
    ],
};
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":        
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case "DELETE_USER":
            const filteredUsers = state.users.filter(user => user.id != action.payload)
            return filteredUsers
        default:
            return state
    }
}

