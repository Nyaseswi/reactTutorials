const initialContacts = {
    noOfMobile: 10
}

const mobileReducer = (state = initialContacts, action) => {
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
        case 'BUY_MOBILE_SUCCESS':
            return {
                ...state,
                noOfMobile: state.noOfMobile * 2
            };
        case 'SELL_MOBILE_SUCCESS':
            return {
                ...state,
                noOfMobile: state.noOfMobile / 100
            };
        default:
            return state;
    }
}

export default mobileReducer;
