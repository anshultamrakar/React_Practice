import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"


const UserProfile2 = () => {
    const [userProfile , setUserProfile] = useState({})

    useEffect(() => {
      getData()
    },[])

    const getData = async() => {
     const response = await fakeFetch("https://example.com/api/user")
      if(response.status === 200){
        setUserProfile(response.data)
      }
    }

    return(
        <div>
          <h2>Name : {userProfile.name}</h2>
           <img src = {`${userProfile.image}`}/>
          <p>Like : {userProfile.likes}</p>
          <p>Comment : {userProfile.comments}</p>
        </div>
    )
}

export default UserProfile2