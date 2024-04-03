import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set6/FakeFetch"

const SocialMedia = () => {
    const [posts , setPosts] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
      getData()
    },[])


    const getData = async() => {
      try{
      const response = await fakeFetch("https://example.com/api/posts")
      if(response.status === 200){
         setPosts(response.data.posts)
         setIsLoading(false)
      }
      }catch(err){
        console.log(err.message)
      }
    }

    const handleShowBakery = () => {
        const filterResult = posts.filter(post => post.category === "Bakery")
        setPosts(filterResult)
    }

    return(
        <div>
         {posts.map(post => (
            <>
            <img src = {post.src}/>
            <h3>{post.caption}</h3>
            <p>Like : {post.likes}</p>
            <p>Views : {post.views} </p>
            </>
            
         ))}
        <button onClick={handleShowBakery}>Show Bakery</button>
        </div>
    )
}

export default SocialMedia