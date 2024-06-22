import React from 'react'

let description = 'The vanishing of will buyers';
let title = 'Stranger Things';
let imageUrl = 'https://shorturl.at/6sxtI';

const App = () => {
    return (
        <div>
            <MovieComponent description={description} title={title} imageUrl={imageUrl} />
            <MovieComponent description={description} title={title} imageUrl={imageUrl} />
            <MovieComponent description={description} title={title} imageUrl={imageUrl} />
            <MovieComponent description={description} title={title} imageUrl={imageUrl} />
        </div>
    )
}

export default App

const MovieComponent = (props) => {

    console.log(props)
    return (
        <div>
            <p>{props.description}</p>
            <h3>{props.title}</h3>
            <img src={props.imageUrl} alt='strangerThings' />

        </div>
    )
}
