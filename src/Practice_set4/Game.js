import {useState} from "react"

const Game = () => {
    const [lives , setLives] = useState(3)

    const looseLife = () => {
        setLives(lives - 1)
    }

    return(
        <div>
         <h2>Current Live : {lives} </h2>
         <button onClick = {looseLife}>Loose Life</button>
        <p>{lives === 0 ? "Game Over" : ""}</p>
        </div>
    )
}

export default Game