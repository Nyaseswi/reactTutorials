const initialUser = {
    noOfUser: [],
    user: {}
};

const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_SUCCESS':
            return {
                ...state,
                noOfUser: action.data
            };
        case 'GET_ALL_USERS_FAILED':
            return {
                ...state,
                message: action.message
            };
        case 'GET_SINGLE_USER_SUCCESS':
            return {
                ...state,
                user: action.data
            };
        case 'GET_SINGLE_USER_FAILED':
            return {
                ...state,
                message: action.message
            };
        case 'ADD_USER_SUCCESS': {
            let noOfUser = [...state.noOfUser];
            noOfUser.push(action.data);
            return {
                ...state,
                noOfUser
            };
        }
        case 'ADD_USER_FAILED':
            return {
                ...state,
                message: action.message
            };
        case 'EDIT_USER_SUCCESS': {
            let noOfUser = [...state.noOfUser];
            let findIndex = noOfUser.findIndex(user => user.id === action.data.id);
            noOfUser[findIndex] = action.data;
            return {
                ...state,
                noOfUser
            };
        }
        case 'EDIT_USER_FAILED':
            return {
                ...state,
                message: action.message
            };
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,
                noOfUser: state.noOfUser.filter(user => user.id !== action.id)
            };
        case 'DELETE_USER_FAILED':
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
};

export default userReducer;
