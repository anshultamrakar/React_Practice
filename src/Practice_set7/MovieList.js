import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'

const MovieList = () => {
    const [movieData , setMovieData] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    
    useEffect(() => {
        getdata()
    },[])

    const getdata = async() => {
     try{
      const response = await fakeFetch("https://example.com/api/movies")
      if(response.status === 200){
       setMovieData(response?.data)
       setIsLoader(true)
      }
     }catch(err){
        console.log(err.message)
     }
    }


  return (
    <div>
        <h2>Movie List</h2>
    </div>
  )
}

export default MovieList
