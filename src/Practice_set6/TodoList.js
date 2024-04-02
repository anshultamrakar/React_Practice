import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set6/FakeFetch"

const TodoList = () => {
 const [todoList , setTodoList]  = useState([])
 const [isLoading , setIsLoading] = useState(true)

 useEffect(() => {
    getData()
 },[])

    const getData = async() => {
        try{
            const response = await fakeFetch("https://example.com/api/todos")
            if(response.status === 200){
                setTodoList(response.data.todos)
                setIsLoading(false)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <div>
          {isLoading ? <p>Loading ....</p> : todoList.map(item => (
            <>
             <h2>{item.title} : {item.desc}</h2>
             <ol>
                {item.todos.map(item => (
                    <li>{item}</li>
                ))}
             </ol>
            </>
           
          ))}
        </div>
    )
}

export default TodoList