import React, { useEffect, useState } from 'react'

const APIURL = 'https://jsonplaceholder.typicode.com/posts'

const FetchUE = () => {
const [post, setPost] =    useState([]);

const fetchURL = async (url) =>{
 const response = await fetch(url)
 const postData = await response.json()
 setPost(postData)
}
useEffect(() =>{
    fetchURL(APIURL)
}, []);

const deleteHandler = (comingId) =>{
   const filteredPost =  post.filter((deletePost) =>{
    return deletePost.id !== comingId
    })
    setPost(filteredPost)
    console.log('Deleted')
}
  return (
    <div>
      {
        post.map((eachPost) =>{
            const {id, title, body} = eachPost
            return(
                <section key={id}>
                    <h4>{title}</h4>
                    <h4>{body}</h4>
                    <button onClick={() => deleteHandler(id)}>Delete</button>
                </section>
            )
        })
      }
    </div>
  )
}

export default FetchUE
