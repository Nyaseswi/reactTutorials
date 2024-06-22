import React from 'react'

const NestedComponents = () => {
  return (
    <div>
         <Content/>
        <ImageComponent/>
        <ImageComponent/>
        <ImageComponent/>
        
      
    </div>
  )
}
const Content = () =>{
    return(
        <h1 style={{
            color:'red',
           
        }}>Component passed multiple time but same data for different data use props </h1>

    )
}
const ImageComponent = () =>{
    const imageUrl = 'https://shorturl.at/9hLD6'
    const imageName = 'theMummy'
    return(
        
        <section style={styles.section} >
            <h3>The Mummy</h3>
            {/* <img src='https://shorturl.at/9hLD6' alt='theMummy'/> */}
            <img src={imageUrl} alt={imageName}/>
            <DescriptionComponent/>
            
        </section>
    )
}

const DescriptionComponent = () =>{
       const imageDescripion = 'adventurer Rick OConnell'
    return(
        <h4>{imageDescripion}</h4>
    )
}


const styles ={
    section:{
        background: 'red'
    }
}

export default NestedComponents
