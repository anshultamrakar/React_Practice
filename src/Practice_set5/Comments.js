import { fakeFetch } from "./FakeFetch"
import { useState , useEffect } from "react"

const Comments = () => {
  const [commentData , setCommentData] = useState([]) 
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  },[])


    const getData = async() => {
        try{
        const response =  await fakeFetch("https://example.com/api/comments")
          if(response.status === 200){
            console.log(response)
           setCommentData(response?.data?.comments)
           setIsLoading(false)
          }
        }catch(err){
            console.log(err.message)
        }
    }


    const handleDelete = (id) => {
        const filterComments = commentData.filter((comment , index) => index + 1 !== id + 1)
        setCommentData(filterComments)
    }

    return(
        <div> 
            <h1>Comments</h1>
            { isLoading ? <p>Loading......</p> :commentData.map((comment , index) => (
                <div key = {index + 1}>
                <h2>{comment.name}</h2>
                <p>{comment.text}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Comments 