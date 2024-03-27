import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"





const UserProfile = () => {


    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        try{
        const response = await fakeFetch('https://example.com/api/user')
        console.log(response) 
        }catch(err){
            console.log(err.message)
        }
    }

  
    return(
        <div>
          
        </div>
    )
}

export default UserProfile