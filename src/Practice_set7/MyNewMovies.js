import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'

const MyNewMovies = () => {
    const [myMovies , setMyMovies] = useState([])
    const [isLoader , setIsLoader] = useState(true)
    const [selectedGenre , setSelectedGenre] = useState("All")


    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
      try{
      const response = await fakeFetch("https://example.com/api/movies")
      if(response.status === 200){
        setMyMovies(response?.data)
        setIsLoader(false)
      } 
      }catch(err){
        console.log(err.message)
      }
    }

    const filterResult = selectedGenre === "All" ? myMovies : myMovies.filter(movie => movie.genre === selectedGenre)
  return (
    <div>
      {isLoader ? <p>Loading....</p>:
      <>
         <h2>New Movie List</h2>
         <label htmlFor="year">Filter by Genre:</label>
       <select name="year" id="year" value = {selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="All">All</option>
        <option value = "Crime">Crime</option>
        <option value = "Drama">Drama</option>
        <option value = "Action">Action</option>
        <option value = "Comedy">Comedy</option>
        <option value = "Science Fiction">Science Fiction</option>
      </select>
          <ul>
              {filterResult.map(movie => (
                  <li>
                      <p>{movie.title}</p>
                      <p>{movie.year}</p>
                      <p>{movie.genre}</p>
                  </li>
              ))}
          </ul>
          </>
        }
    </div>
  )
}

export default MyNewMovies