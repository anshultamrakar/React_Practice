import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"

const UserList = () => {
    const [userdata , setUserData] = useState([])
    const [isLoader , setIsLoader] = useState(true)
    const [selectedCompany , setSelectedCompany] = useState("All")


    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
     try{
       const response = await fakeFetch("https://example.com/api/users")
       if(response.status === 200){
        setUserData(response?.data) 
        setIsLoader(false)
       }
     }catch(err){
        console.log(err.message)
     }
    }

    const filterResults = selectedCompany === "All" ? userdata : userdata.filter(user => user.company === selectedCompany)

    return(
        <div>
            {isLoader ? <p>Loading.....</p> : 
            <>
              <h2>Users</h2>
                <label htmlFor="year">Filter by Company:</label>
                    <select name="year" id="year" value = {selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                    <option value="All">All Companies</option>
                    <option value = "ABC Inc">ABC Inc</option>
                    <option value = "ACME Corp">ACME Corp</option>
                    <option value = "XYZ Corp">XYZ Corp</option>
                    </select>
                <ul>
            {filterResults.map(user => (
                <li>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                    <p>{user?.website}</p>
                    <p>{user?.company}</p>
                </li>
            ))} 
         </ul>
        </>}
        </div>
    )
}

export default UserList