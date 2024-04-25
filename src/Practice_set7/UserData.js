import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"

const UserData = () => {
    const [userData , setUserData]  = useState([])
    const [showAddress , setShowAddress] = useState(true)
    const [loader , setLoader] = useState(true)

    useEffect(() => {
        getData()
    },[])


    const getData = async() => {
       try{
       const response = await fakeFetch("https://example.com/api/user")
       if(response.status === 200){
        setUserData(response.data)
        setLoader(false)
       }
       }catch(err){
        console.log(err.message)
       }
    }

    const handleAddress = () => {
        setShowAddress(false)
    }

  return (
    <div>
        {loader ? <p>Loading.....</p> : 
        <>
        <h2>User</h2>
        <p>Name : {userData?.name} </p> 
        <p>Email :  {userData?.email} </p>
        <p>Phone : {userData?.phone} </p>
        <button onClick={handleAddress}>Hide Address</button>
        {showAddress ? 
        <>
        <p>{userData?.address?.street}</p>
        <p>{userData?.address?.suite}</p>
        <p>{userData?.address?.city}</p>
        <p>{userData?.address?.zipcode}</p>
        </> 
        : null }
        </>}
    </div>
  )
}

export default UserData