// export const incrementAction = () => async dispatch => {
//     dispatch({
//         type: 'INCREMENT'
//     })
// }
export const incrementAction = (value) => async dispatch => {
    dispatch({
        type: 'INCREMENT',
        payload: value
    })
}

export const decrementAction = () => async dispatch => {
    dispatch({
        type: 'DECREMENT'
    })
}

