import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USERS_DATA':
            return {
                ...state,
                userData: action.payload
            };
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        case 'ERROR':
            return {
                ...state,
                isError: {
                    status: true,
                    msg: action.payload
                }
            };
        default:
            return state;
    }
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
        dispatch({type:'ERROR', payload:{status: false, msg: ''}})
        try {
            const response = await fetch(fetchDataUrl);
            const data = await response.json();
            dispatch({
                type: 'UPDATE_USERS_DATA',
                payload: data
            });
            dispatch({ type: 'LOADING', payload: false });
            dispatch({type:'ERROR', payload:{status: false, msg: ''}})
        } catch (error) {
            console.log(error);
            dispatch({ type: 'ERROR', payload: error.message });
            dispatch({ type: 'LOADING', payload: false });
            dispatch({type:'ERROR', payload:{status: true, msg: 'error.message'}})
        }
    };

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users');
    }, []);

    if (state.isLoading) {
        return <h1>Loading..</h1>;
    }

    return (
        <div style={{
            background:'aqua'
        }}>
            {state.userData.map((eachData) => {
                const { id, name, email } = eachData;
                return (
                    <section key={id}>
                        <h3>{name}</h3>
                        <h3>{email}</h3>
                        <button>Delete</button>
                        <button>Edit</button>
                    </section>
                );
            })}
        </div>
    );
};

export default DeleteReducer;
