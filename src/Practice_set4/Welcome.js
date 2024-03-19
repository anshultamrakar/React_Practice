import {useState} from "react"

const Welcome = () => {
    const [fontSize, setFontSize] = useState("18px")
    return(
        <div>
         <p style = {{fontSize}}>Welcome</p>
         <div>
            <button onClick={() => setFontSize("19px")}>+</button>
            <button onClick={() => setFontSize("17px")}>-</button>
         </div>
        </div>
    )
}

export default Welcome