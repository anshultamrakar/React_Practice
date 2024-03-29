import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"



const UserProfile2 = () => {
    const [profileData , setProfileData] = useState({})

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        try{
            const response = await fakeFetch("https://example.com/api/user")
            if(response.status === 200){
                setProfileData(response?.data)
            }
        }catch(err){
            console.log("error")
        }
    }

    return(
        <div>
           <h2>User Profile</h2>
           <img src = {profileData.image}/>
           <p>Name : {profileData.name}</p>
           <p>Likes :{profileData.likes}</p>
           <p>Comments : {profileData.comments}</p>
        </div>
    )
}

export default UserProfile2