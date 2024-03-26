import { useState } from "react"
const vegetables = [
    {
      id: 1,
      name: 'Carrots',
      pickDate: '2023-03-25',
    },
    {
      id: 2,
      name: 'Broccoli',
      pickDate: '2023-03-30',
    },
    {
      id: 3,
      name: 'Peppers',
      pickDate: '2023-03-25',
    },
    {
      id: 4,
      name: 'Tomatoes',
      pickDate: '2023-03-27',
    },
    {
      id: 5,
      name: 'Ladies Finger',
      pickDate: '2023-03-30',
    },
  ]

 

const Vegetables = () => {
    const [isHighLight , setIsHighLight] = useState("")

    const highlight = () => {
        setIsHighLight("2023-03-30")
    }
  
    return(
        <div>
            <button onClick={highlight}>HighLight Fresh Vegetables</button>
        {vegetables.map(vege => (
            <ol key = {vege.id}>
                <li style = {{color : vege.pickDate === isHighLight ? "green" : "black"}}>
                    <p>{vege.name}</p>
                    <p>{vege.pickDate}</p>
                </li>
            </ol>
        ))}
        </div>
    )
}


export default Vegetables