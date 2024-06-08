import { useState , useRef } from "react"

const Demo2 = () => {
    const render = useRef(0)
    const inputFocus = useRef()
    const [userInput , setUserInput] = useState(0)

    const handleChange = (e) => {
        setUserInput(e.target.value) 
        render.current ++ 
    }

    const focusOnInput = () => {
        inputFocus.current.focus()
    }
    return(
        <div>
           <input type = "text" ref={inputFocus} value = {userInput} onChange={handleChange} />
           <p>{userInput}</p>
           <p>{render.current} - render</p>
           <button onClick={focusOnInput}>Focus</button>
        </div>
    )
}

export default Demo2