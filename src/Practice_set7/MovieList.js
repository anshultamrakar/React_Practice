import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'

const MovieList = () => {
    const [movieData , setMovieData] = useState([])
    const [filterResult , setFilterResult] = useState([])
    const [selectedYear , setSelectedYear] = useState("All")
    const [isLoader, setIsLoader] = useState(true)
    

    useEffect(() => {
        getdata()
    },[])

    const getdata = async() => {
     try{
      const response = await fakeFetch("https://example.com/api/movies")
      if(response.status === 200){
       setMovieData(response?.data)
       setIsLoader(false)
      }
     }catch(err){
        console.log(err.message)
     }
    }

    
  const filterResults = selectedYear === "All" ? movieData : movieData.filter(movie => movie.year == selectedYear)

  return (
    <div>
      {isLoader ? <p>Loading....</p> : 
      <>
      <h2>Movie List</h2>
       <label htmlFor="year">Filter by Year:</label>
      <select name="year" id="year" value = {selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="All">All</option>
        <option value = "2005">2005</option>
        <option value = "2006">2006</option>
        <option value = "2007">2007</option>
        <option value = "2008">2008</option>
        <option value = "2009">2009</option>
        <option value = "2010">2010</option>
      </select>
        <ul>
          {filterResults.map((movie, index) => (
            <li key = {index}>
              <p>Name : {movie?.title}</p>
              <p>Year : {movie?.year}</p>
              <p>Rating : {movie?.rating}</p>
            </li>
          ))}
        </ul>
      </>}
    </div>
  )
}

export default MovieList
