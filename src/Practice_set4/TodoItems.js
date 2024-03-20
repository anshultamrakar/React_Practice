import {useState} from "react"

const TodoItems = (props) => {
    const [listItems , setListItems] = useState(props.todoItems)
   
   const markDone = (id) => {
    const newList = listItems.map(item => item.id === id ? {...item , isDone : true } : item)
    setListItems(newList)
   }

    return(
        <div>
        <h2>Todo List</h2>
        {listItems.map(item => (
            <ul key = {item.id}>
                <li style = {{color : item.isDone ? "red" : "back" , textDecoration : item.isDone ? "line-trough" : "none" }} >{item.task}</li>
                <button onClick={() => markDone(item.id)}>Mark as done</button>
            </ul>
        ))}
        </div>
    )
}

export default TodoItems