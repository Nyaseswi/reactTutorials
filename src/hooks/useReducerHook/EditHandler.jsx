import React, { useEffect, useReducer, useState } from 'react';

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
    if (action.type === 'ONCLICK_EDIT') {
        return {
            ...state,
            isEditing: action.payload
        };
    }
    if (action.type === 'UPDATE_USER') {
        const newUsers = state.userData.map((eachUser) => {
            if (eachUser.id === action.payload.id) {
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                };
            } else {
                return eachUser;
            }
        });
        return {
            ...state,
            userData: newUsers
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
    },
    isEditing: {
        status: false,
        id: '',
        name: '',
        email: ''
    }
};

const EditHandler = () => {
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

    const updatedata = (id, name, email) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: {
                id, name, email
            }
        });
        dispatch({ type: 'ONCLICK_EDIT', payload: { status: false, id: '', name: '', email: '' } });
    };

    return (
        <div style={{ background: 'aqua' }}>
            {state.isEditing?.status && <EditFormContainer id={state.isEditing.id} newName={state.isEditing.name} newEmail={state.isEditing.email} updatedata={updatedata} />}
            {state.userData.map((eachData) => {
                const { id, name, email } = eachData;
                return (
                    <section key={id}>
                        <h3>{name}</h3>
                        <h3>{email}</h3>
                        <button onClick={() => deleteHandler(id)}>Delete</button>
                        <button onClick={() => dispatch({ type: 'ONCLICK_EDIT', payload: { status: true, id, name, email } })}>Edit</button>
                    </section>
                );
            })}
        </div>
    );
};

// Creating form 
const EditFormContainer = ({ id, newName, newEmail, updatedata }) => {
    const [name, setName] = useState(newName || '');
    const [email, setEmail] = useState(newEmail || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        updatedata(id, name, email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Update</button>
        </form>
    );
};

export default EditHandler;
