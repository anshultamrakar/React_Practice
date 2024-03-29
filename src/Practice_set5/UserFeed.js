import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"

const UserFeed = () => {
 const [isLoading , setLoading] = useState(true)
 const [listData , setListData] = useState([])

    useEffect(() => {
      getData()
    },[])


    const getData = async() => {
        try{
            const response = await fakeFetch("https://example.com/api/users")
             if(response.status === 200){
                setListData(response.data)
                setLoading(false)
             }
        }catch(err){
            console.log(err.message)
        }
        
    }

    return(
        <div>
           <h2>User Feed</h2>
            {isLoading ? <p>Loading.....</p> : listData.map(item => (
                <div>
                    <img src = {item.image} />
                    <p>Like : {item.likes}</p>
                    <p>Comments : {item.comments}</p>
                </div>
            ))}
        </div>
    )
}

export default UserFeed