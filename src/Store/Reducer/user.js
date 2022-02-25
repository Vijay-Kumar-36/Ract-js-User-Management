const initialState = {
    users: []
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { users: [...state.users, action.playload] }
        case 'DELETE_USER':
            const tepmuser = state.users.filter((_, index) => {
                return index !== action.playload
            })
            return {
                users: [...tepmuser]
            }

        default:
            return state;
    }
}
export default userReducer;