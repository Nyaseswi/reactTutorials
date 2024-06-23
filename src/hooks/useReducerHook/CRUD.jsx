import React, { useReducer, useState } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map(item => 
        item.id === action.payload.id ? action.payload : item
      );
    case 'DELETE':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const BasicUR = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const [updateId, setUpdateId] = useState(null);

  const handleCreate = () => {
    dispatch({ type: 'CREATE', payload: { id: Date.now(), text: inputValue } });
    setInputValue('');
  };

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE', payload: { id: updateId, text: inputValue } });
    setInputValue('');
    setUpdateId(null);
  };

  const handleEdit = (item) => {
    setInputValue(item.text);
    setUpdateId(item.id);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {updateId ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
      <ul>
        {state.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicUR;
