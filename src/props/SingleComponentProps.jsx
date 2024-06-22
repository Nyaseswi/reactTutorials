import React from 'react'

const SingleComponentProps = () => {
  return (
    <div>
        <h1 style={{color:'red', textAlign:'center'}}>Repetion of props every time </h1>
      <MovieComponent title = 'The Mummy' description = 'Horror'/>
      <MovieComponent title = 'The Daddy' description = 'Comedy'/>
      <MovieComponent title = {'' || 'nothing....'} description = {'' ||'No'} />
    </div>
  )
}

const MovieComponent = (props) =>{
    const {title, description} = props
    return(
        <section>
            <h3>Title: {title}</h3>
            <img src='https://shorturl.at/9hLD6' alt='mummy' />
            <h4>Description: {description}</h4>
        </section>
    )
}

export default SingleComponentProps
