import React, { useEffect, useState } from 'react'


const SearchFeature = () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const [name, setName] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const fetchURL = async (apiurl) => {
        const response = await fetch(apiurl);
        const { drinks } = await response.json()
        setName(drinks);


    }
    useEffect(() => {
        const correctURL = `${URL} ${searchTerm}`
        fetchURL(correctURL)
    }, [searchTerm]);
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1 rem',
            background: 'lightcoral'
        }}>
            <h1>Drinks Count: {name.length}</h1>
            <form>
                <input type='text' name='search' id='search' placeholder='Search..' value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }} />
                <hr />
            </form>
            {
                name.map((eachName) => {
                    const { strDrink, strCategory, strGlass, idDrink, strDrinkThumb } = eachName
                    return (
                        <section>
                            <ul key={idDrink}>
                                <img style={{
                                    width: '70px',
                                    height: '100px'
                                }} src={strDrinkThumb} alt='strDrinkThumb' />
                                <li>{strDrink}</li>
                                <li>{strCategory}</li>
                                <li>{strGlass}</li>



                            </ul>
                        </section>
                    )
                })
            }

        </div>
    )
}

export default SearchFeature
