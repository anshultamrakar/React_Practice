import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'

const MyNewMovies = () => {
    const [myMovies , setMyMovies] = useState([])
    const [isLoader , setIsLoader] = useState(true)


    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
      try{
      const response = await fakeFetch("https://example.com/api/movies")
      if(response.status === 200){
        setMyMovies(response?.data)
      } 
      }catch(err){
        console.log(err.message)
      }
    }
  return (
    <div>
        <h2>New Movie List</h2>
        <ul>
            {myMovies.map(movie => (
                <li>
                    <p>{movie.title}</p>
                    <p>{movie.year}</p>
                    <p>{movie.genre}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MyNewMovies