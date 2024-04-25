import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"

const WheatherData = () => {
    const [data , setData ] = useState([])
    const [tempinF , setTempinF] = useState(false)
    const [isloading ,setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])


    const getData = async() => {
       try{
        const response = await fakeFetch("https://example.com/api/weather")
        if(response.status === 200){
            setData(response.data)
            setLoading(false)
        }
       }catch(err){
        
       }
    }

    const handleTemp = () =>{
      setTempinF(!tempinF)
    }

  return (
    <div>
        {isloading ? <p>Loading...</p> :
        <>
        <h2>Wheather data </h2>
        <p>Temperature : {tempinF ? (data?.temperature * 9/5)+ 32 + " " +  "F" : data?.temperature + " " + "C"}</p>
        <p>Humidity : {data?.humidity} % </p>
        <p>Wind Speed :{data?.windSpeed} km/hr </p>
        <button onClick = {handleTemp}>Switch to Fehrenite </button>
        </>
    }
    </div>
  )
}

export default WheatherData