import { fakeFetch } from "./FakeFetch"
import { useState , useEffect } from "react"

const Products = () => {
 const [listItems , setListItems]  = useState([])
  
 useEffect(() => {
    getData()
 },[])

 const getData = async() => {
    try{
        const response = await fakeFetch("https://example.com/api/products")
        if(response.status === 200){
            setListItems(response?.data?.products)
        }
    }catch(err){
        console.log(err)
    }
 }


 const handleClick = () => {
    const filterItems = listItems.filter(item => item.quantity > 20 )
    setListItems(filterItems)
 }


 const handleFilterByPrice = () => {
    const filterItemPrice = listItems.filter(item => item.price > 100 )
    setListItems(filterItemPrice)
 }

    return(
        <div>
         <h1>Products</h1>
         <button onClick={handleClick}>Show product with quantity more than 20</button>
         <button onClick={handleFilterByPrice}>Filter by Price</button>
         {listItems.map(item => (
            <ul>
                <li>{item.name} -- Rs. {item.price} -- Quantity : {item.quantity}</li>
            </ul>
         ))}
        </div>
    )
}

export default Products