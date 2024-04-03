import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set6/FakeFetch"

const VideoLibrary = () => {
    const [videoList , setVideoList]  = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
      try{
        const response = await fakeFetch("https://example.com/api/videos")
        if(response.status === 200){
          setVideoList(response.data.videos)
          setIsLoading(false)
        }
      }catch(err){
        console.log(err.message)
      }
    }

    const handleDelete = () => {
      const filterResult = videoList.filter((_ , index) => index !== 0)
      setVideoList(filterResult)
    }

    return(
        <div>
          <h3>PlayList</h3>
          {videoList.map(video => (
            <div className="">
              <img src = {video?.thumbnail}/>
              <h3>{video.title}</h3>
              <p>Likes : {video.likes}</p>
              <p>Views : {video.views}</p>
            </div>
          ))}
          <button onClick = {handleDelete}>Delete</button>
        </div>
    )
}

export default VideoLibrary