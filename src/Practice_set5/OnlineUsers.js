import { fakeFetch } from "./FakeFetch"
import { useEffect , useState } from "react"

const OnlineUsers = () => {
  const [listData , setListData] = useState([])

    useEffect(() => {
        getData()
    },[]) 

  const getData = async() => {
   try{
   const response = await fakeFetch("https://example.com/api/users/status")
    if(response.status === 200){
        setListData(response?.data?.users)
    }
   }catch(err){
    console.log(err.message)
   }
  }

   
    return(
        <div>
        <h3>Online Users</h3>
        {listData.map(item => (
            <ul>
                <li style = {{color : item.status === "Online" ? "green" : "red" }}>{item.name} - {item.status}</li>
            </ul>
        ))}
        </div>
    )
}

export default OnlineUsers