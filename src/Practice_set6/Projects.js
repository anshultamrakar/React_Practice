import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set6/FakeFetch"

const Projects = () => {
const [projectData , setProjectData] = useState([])
const [isLoading , setIsLoading] = useState(true)
const [showDetail , setShowDetail] = useState(null)

    useEffect(()=> {
        getData()
    },[])


    const getData = async() => {
        try{
         const response = await fakeFetch("https://example.com/api/projects")
           if(response.status === 200){
            setProjectData(response?.data?.projects)
            setIsLoading(false)
           }
        }catch(err){
          console.log(err.message)
        }
    }

    const handleShowDetail = (ind) => {
        setShowDetail(ind + 1)
    }
    
console.log(projectData)
    return(
        <div>
        <h2>Projects</h2>
        {isLoading ? <p>Loading ....</p> : projectData.map((project , index) => (
            <div>
                <p>Name : {project.title}</p>
                <p>Description : {project.description}</p>
                <button onClick={() => handleShowDetail(index)}>Show detail</button>
                <hr/>
            </div>
        ))}
        </div>
    )
}

export default Projects