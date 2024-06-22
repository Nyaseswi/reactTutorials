import React from 'react';

const data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 4,
        "id": 177,
        "title": "ratione autem magni eveniet voluptas quia corporis",
        "url": "https://via.placeholder.com/600/37942b",
        "thumbnailUrl": "https://via.placeholder.com/150/37942b"
    }
]

const App = () => {
    return (
        <div className='mainContainer'>
            {
                data.map((eachObj) => {
                    const { id, thumbnailUrl, title } = eachObj
                    return (
                        <Photos key={id} id={id} thumbnailUrl={thumbnailUrl} title={title} />
                    )
                })
            }
        </div>
    )
}

const Photos = ({ id, thumbnailUrl, title }) => {
    let details = 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
    return (
        <div className='photosContainer'>
            <h4>{id}</h4>
            <img src={thumbnailUrl} alt='thumbnailUrl' />
            <p>{title}</p>
            <h3 className='line-clamp'>{details}</h3>
        </div>
    )


}

export default App
// css styles

// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// .mainContainer{
//     background-color: whitesmoke;
//     min-height: 100vh;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 2rem;
// }

// .photosContainer h3{
//    font-size: 15px;
//    font-family: sans-serif;
//    background-color: lightcoral;
// }
// .line-clamp {
//     display: -webkit-box;
//     -webkit-line-clamp: 1;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
// }

