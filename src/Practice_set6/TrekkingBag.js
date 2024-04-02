import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set6/FakeFetch"

const TrekkingBag = () => {
  const [selectedBtn , setSelectedBtn] = useState("Shoes") 
  const [items , setItems] = useState([])
  const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {
        getData()
    },[])
    

    const getData = async() => {
         try{
        const response = await fakeFetch("https://example.com/api/products")
          if(response.status === 200){
            
            setItems(response?.data.products)
            setIsLoader(false)
          }
         }catch(err){
            console.log(err.message)
         }
    }
    return(
        <div>
          <div>
            <button onClick={() => setSelectedBtn("Shoes")}>Show Shoes</button>
            <button onClick={() => setSelectedBtn("Tshirt")}>Show T shirt</button>
            <button onClick={() => setSelectedBtn("Trekking Bag")}>Show Trekking bag</button>
          </div>
          <div>
             {selectedBtn === "Shoes" &&  items.map(item => item.name === selectedBtn ? (
                <>
                 <img src = {item.src}/>
                  <p>Name : {item.name}</p>
                  <p>Price  : {item.price}</p>
                  <p>Description: {item.desc}</p>
                </>
              
             ) : "")}
             {selectedBtn === "Tshirt" && items.map(item => item.name === selectedBtn ? (
                <>
                 <img src = {item.src}/>
                  <p>Name : {item.name}</p>
                  <p>Price  : {item.price}</p>
                  <p>Description: {item.desc}</p>
                </>
              
             ) : "")}
             {selectedBtn === "Trekking Bag" && items.map(item => item.name === selectedBtn ? (
                <>
                 <img src = {item.src}/>
                  <p>Name : {item.name}</p>
                  <p>Price  : {item.price}</p>
                  <p>Description: {item.desc}</p>
                </>
              
             ) : "")}
          </div>
        </div>
    )
}

export default TrekkingBag