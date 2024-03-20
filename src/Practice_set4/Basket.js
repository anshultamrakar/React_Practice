import {useState} from "react"

const itemList = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
  ]

const Basket = () => {
 
   const [listItems , setListItems] = useState([])
    

  const getAll = () => {
    setListItems(itemList)
  }

   const getFruits = () => {
     const myFruit  = itemList.filter(item => item.category === "Fruit")
     setListItems(myFruit)
    }

    const getVegetables = () => {
        const myVegetable = itemList.filter(item => item.category === "Vegetable")
        setListItems(myVegetable)
    }


    return(
        <div>
            <div>
                <button onClick = {getAll}>All</button>
                <button onClick={getFruits}>Fruits</button>
                <button onClick={getVegetables}>Vegetables</button>
            </div>
            <div>
              {listItems.map(item => (
                <ul key = {item.id} style = {{color : item.category === "Fruit" ? "orange" : "green" }}>
                    <li>{item.name}</li>
                </ul>
              ))}
            </div>
          

        </div>
    )
}

export default Basket