import React from 'react'

let strangerThingsObject = {
    title: 'Stranger Things',
    description: 'The vanishing of wil buyres',
    imageUrl: 'https://shorturl.at/6sxtI'
}
let jurassicObject = {
    imageUrl: 'https://shorturl.at/GAvVC',
    title: '',
    description: ''
}




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
            <MovieComponent title={strangerThingsObject.title} imageUrl={strangerThingsObject.imageUrl} description={strangerThingsObject.description} />
            <MovieComponent title={jurassicObject.title} imageUrl={jurassicObject.imageUrl} description={jurassicObject.description} />

        </div>
    )
}

export default App
