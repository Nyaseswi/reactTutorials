export const getAllUsers = () => {
    return {
        type: 'GET_ALL_USERS'
    }
}

export const getSingleUser = (id) => {
    return {
        type: 'GET_SINGLE_USER', id
    }
}