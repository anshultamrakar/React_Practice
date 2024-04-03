import { fakeFetch } from "../Practice_set6/FakeFetch"
import { useState , useEffect } from "react"

const HabbitTracker2 = () => {
    const [habbitData , setHabbitData] = useState([])
    const [isLoader , setIsLoader] = useState(true)
    
    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
      try{
       const response = await fakeFetch("https://example.com/api/habits")
       if(response.status === 200){
        setHabbitData(response?.data?.habits)
        setIsLoader(false)
       }
      }catch(err){
        console.log(err.message)
      }
    }

    const handleShowArchieve = () => {
      const myResult = habbitData.map(habit => !habit.archived ? {...habit , archived : habit.archived} : habit)
      console.log(myResult)
    }

  
    return(
        <div>
            <h2>My Habbit Tracker</h2>
            { isLoader ? <p>Loading.....</p> :
              habbitData.map(habit => !habit.archived ? (
                <>
                <h5>{habit.title}</h5>
                <p>{habit.desc}</p>
                <p>Days Followed : {habit.daysFollowed}</p>
                <p>Days Skipped : {habit.daysSkipped}</p>
                <hr/>
                </>
              ) : null)
            }
             <button onClick={handleShowArchieve}>Show Archive</button>
        </div>
    )
}


export default HabbitTracker2