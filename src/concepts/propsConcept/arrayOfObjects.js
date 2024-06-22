import React from 'react'

let movieData = [
    {
        title: 'Stranger Things',
        description: 'The vanishing of wil buyres',
        imageUrl: 'https://shorturl.at/6sxtI'
    },
    {
        imageUrl: 'https://shorturl.at/GAvVC',
        title: 'Jurrasic World ',
        description: 'Fallen kingdom'
    },
    {
        imageUrl: 'https://shorturl.at/ThLLR',
        title: 'The GoodDoctor',
        description: 'Us Tv Shows'
    }
]







const MovieComponent = (props) => {
    return (
        <div>
            <p>{props.description || 'Alterantive Description'}</p>
            <img src={props.imageUrl} alt='netflixImage' />
            <h3>{props.title || 'Alterantive title'}</h3>
        </div>
    )

}

const App = () => {
    return (
        <div>
            <MovieComponent title={movieData[0].title} imageUrl={movieData[0].imageUrl} description={movieData[0].description} />
            <MovieComponent title={movieData[1].title} imageUrl={movieData[1].imageUrl} description={movieData[1].description} />
            <MovieComponent title={movieData[2].title} imageUrl={movieData[2].imageUrl} description={movieData[2].description} />


        </div>
    )
}

export default App
