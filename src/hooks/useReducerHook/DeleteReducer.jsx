import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === 'UPDATE_USERS_DATA') {
        return {
            ...state,
            userData: action.payload,
        };
    }
    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: action.payload,
        };
    }
    if (action.type === 'DELETE_USER') {
        const newUsers = state.userData.filter((eachData) => eachData.id !== action.payload);
        return {
            ...state,
            userData: newUsers
        };
    }
    if (action.type === 'ERROR') {
        return {
            ...state,
            isError: action.payload
        };
    }
    return state;
};

const initialState = {
    userData: [],
    isLoading: false,
    isError: {
        status: false,
        msg: ''
    }
};
 
const DeleteReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async (fetchDataUrl) => {
        dispatch({ type: 'LOADING', payload: true });
        dispatch({ type: 'ERROR', payload: { status: false, msg: '' } });
        try {
            const response = await fetch(fetchDataUrl);
            const data = await response.json();
            dispatch({
                type: 'UPDATE_USERS_DATA',
                payload: data
            });
            dispatch({ type: 'LOADING', payload: false });
        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR', payload: { status: true, msg: error.message } });
            dispatch({ type: 'LOADING', payload: false });
        }
    };

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users');
    }, []);

    if (state.isLoading) {
        return <h1>Loading..</h1>;
    }

    const deleteHandler = (id) => {
        dispatch({ type: 'DELETE_USER', payload: id });
    };

    return (
        <div style={{ background: 'aqua' }}>
            {state.userData.map((eachData) => {
                const { id, name, email } = eachData;
                return (
                    <section key={id}>
                        <h3>{name}</h3>
                        <h3>{email}</h3>
                        <button onClick={() => deleteHandler(id)}>Delete</button>
                        <button>Edit</button>
                    </section>
                );
            })}
        </div>
    );
};

export default DeleteReducer;
