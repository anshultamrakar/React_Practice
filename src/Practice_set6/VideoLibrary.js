import { useState , useEffect } from "react"
import { fakeFetch } from "./FakeFetch"

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
            setVideoList(response?.data?.videos)
            setIsLoading(false)
        }
      }catch(err){
        console.log(err.message)
      }
    }
    return(
        <div style = {{width : "100%"}}>
          <h3>PlayList</h3>
          {videoList.map(video => (
            <div style = {{display : "flex"}}>
               <img src = {video.thumbnail}/>
            </div>
          ))}
        </div>
    )
}

export default VideoLibrary