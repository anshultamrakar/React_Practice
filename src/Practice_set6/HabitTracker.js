import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set6/FakeFetch"

const HabitTracker = () => {

    const [habbits , setHabbits] = useState([])
    const [isLoader , setIsLoader] = useState(true)

    useEffect(() => {
        getData()
    },[])


    const getData = async () => {
        try{
         const response = await fakeFetch("https://example.com/api/habits")
         if(response.status === 200){
            setHabbits(response.data.habits)
            setIsLoader(false)
         }
        }catch(err){
            console.log(err.message)
        }
    }
    return(
        <div>
         <h2>Habbit Tracker</h2>
         { isLoader ? <p>Loading.....</p> : habbits.map(habbit => (
            <ul>
                <li>
                    <h2>{habbit.title}</h2>
                    <p>{habbit.desc}</p>
                    <p>Days Followed : {habbit.daysFollowed}</p>
                    <p>Days Skipped: {habbit.daysSkipped}</p>
                </li>
            </ul>
         ))}
        </div>
    )
}


export default HabitTracker