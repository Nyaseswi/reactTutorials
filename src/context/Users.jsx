import React from 'react'

const users = [
    {
        name:'Leanne Graham',
        phone:8919577668,
        website:'hildegard.org'
    },
    {
        name:'Ervin Howell',
        phone:8905667771,
        website:'anastasia.net' 
    }
]

// creating context 
export const UsersDataContext = React.createContext();

// creating provider 
export const UsersDataProvider = ({children}) =>{
    return(
        <UsersDataContext.Provider value={users}>
            {children}
        </UsersDataContext.Provider>
    )
}


