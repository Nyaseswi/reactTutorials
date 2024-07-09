const intialContacts = {
    noOfMobile: 10
}

const mobileReducer = (state = intialContacts, action) => {
    switch (action.type) {
        case 'BUY_MOBILE':
            return {
                ...state,
                noOfMobile: state.noOfMobile - 1
            };
        case 'SELL_MOBILE':
            return {
                ...state,
                noOfMobile: state.noOfMobile + 1
            };
        default:
            return state;
    }
}

export default mobileReducer;