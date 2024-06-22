import React, { useState } from 'react';

const FilterDelete = () => {
    const initialArrays = [
        {
            id: 'yoodsjsdjhsakjhkasd',
            name: "Alice",
            age: 30,
            occupation: "Engineer"
        },
        {
            id: 'yoadsjsdjhsakjhkasd',
            name: "Bob",
            age: 25,
            occupation: "Designer"
        }
    ];

    const [data, setData] = useState(initialArrays);

    const deleteHandler = (comingId) => {
        const filteredData = data.filter((eachObj) => {
            return eachObj.id !== comingId;
        });
        setData(filteredData);
    };

    return (
        <div>
            {
                data.map((eachItem) => {
                    const { id, name, age, occupation } = eachItem;
                    return (
                        <section key={id}>
                            <h1>My name is {name}</h1>
                            <h2>My age is {age}</h2>
                            <h3>My occupation is {occupation}</h3>
                            <button onClick={() => deleteHandler(id)}>Delete</button>
                        </section>
                    );
                })
            }
        </div>
    );
};

export default FilterDelete;
