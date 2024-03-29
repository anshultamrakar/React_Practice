import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"


<<<<<<< HEAD

const UserProfile2 = () => {
    const [profileData , setProfileData] = useState({})
=======
const UserProfile2 = () => {
    const [userProfile , setUserProfile] = useState({})
>>>>>>> b691d1d5e16fd83d4651bf5c882e642e7f671367

    useEffect(() => {
      getData()
    },[])

    const getData = async() => {
<<<<<<< HEAD
        try{
            const response = await fakeFetch("https://example.com/api/user")
            if(response.status === 200){
                setProfileData(response?.data)
            }
        }catch(err){
            console.log("error")
        }
=======
     const response = await fakeFetch("https://example.com/api/user")
      if(response.status === 200){
        setUserProfile(response.data)
      }
>>>>>>> b691d1d5e16fd83d4651bf5c882e642e7f671367
    }

    return(
        <div>
<<<<<<< HEAD
           <h2>User Profile</h2>
           <img src = {profileData.image}/>
           <p>Name : {profileData.name}</p>
           <p>Likes :{profileData.likes}</p>
           <p>Comments : {profileData.comments}</p>
=======
          <h2>Name : {userProfile.name}</h2>
          <img src = {`${userProfile.image}`}/>
          <p>Like : {userProfile.likes}</p>
          <p>Comment : {userProfile.comments}</p>
>>>>>>> b691d1d5e16fd83d4651bf5c882e642e7f671367
        </div>
    )
}

export default UserProfile2