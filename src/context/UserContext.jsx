import React from 'react';

const initialState = {
    firstName: 'emma',
    lastName: 'watson'
};

// Creating context
export const UserContext = React.createContext();

// Creating provider
export const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={initialState}>
            {children}
        </UserContext.Provider>
    );
};
