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
            {
                movieData.map((eachObj, index) => {
                    const { title, imageUrl, description } = eachObj
                    return (
                        < MovieComponent key={index} title={title} imageUrl={imageUrl} description={description} />

                    )

                })
            }
        </div>
    )
}

export default App
