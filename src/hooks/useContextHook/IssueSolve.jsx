import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const IssueSolve = () => {
    const data = useContext(UserContext);
    const { firstName, lastName } = data;
    return (
        <div>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
        </div>
    );
};

export default IssueSolve;
