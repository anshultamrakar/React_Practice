import {useState} from "react"


const Todo = (props) => {
   const [filterItems , setFilterItems] = useState(props.todoItems)

    const removeItem = (id) => {
      const newList = filterItems.filter(item => item.id !== id)
      setFilterItems(newList)
    }
    return(
        <div>
         <h2>Todo List</h2>
        {filterItems.map(item => (
            <ul key = {item.id}>
                <li style = {{textDecoration :  item.isDone ? "line-through" : "none" }}>{item.task}
                </li>
               <button onClick={() => removeItem(item.id)}> x </button>
            </ul>
        ))}
        </div>
    )
}

export default Todo