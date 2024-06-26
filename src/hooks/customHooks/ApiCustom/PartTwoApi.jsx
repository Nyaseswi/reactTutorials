import React, { useEffect, useState } from 'react';
import CustomApiHook from './CustomApiHook';

const Api = 'https://jsonplaceholder.typicode.com/users';
const PartTwoApi = () => {
    const [userData, loading, isError] = CustomApiHook(Api);

    if (loading) {
        return <h5>Loading Wait</h5>;
    }

    if (isError) {
        return <h3>Check error</h3>;
    }

    return (
        <div>
            {userData.map((eachUser) => {
                const { name, id } = eachUser;
                return (
                    <section key={id}>
                        <h3>Name: {name}</h3>
                    </section>
                );
            })}
        </div>
    );
};

export default PartTwoApi;
