const initialUser = {
    noOfUser: [],
    user: {}
}

const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        // Define actions for user management if needed
        case 'GET_ALL_USERS_SUCCESS':
            return {
                ...state,
                noOfUser: action.data
            }
        case 'GET_ALL_USERS_FAILED':
            return {
                ...state,
                message: action.message
            }
        case 'GET_SINGLE_USER_SUCCESS':
            return {
                ...state,
                user: action.data
            }
        case 'GET_SINGLE_USER_FAILED':
            return {
                ...state,
                message: action.message
            }

        default:
            return state;
    }
}

export default userReducer;
