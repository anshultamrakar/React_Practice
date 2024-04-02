import { useState , useEffect } from "react"
import { fakeFetch } from "../Practice_set5/FakeFetch"

const TrekkingBag = () => {

    useEffect(() => {
        getData()
    },[])

   const getData = async() => {
      try{
      const response = await fakeFetch("https://example.com/api/products")
       console.log(response)
      }catch(err){
        console.log(err.message)
      }
   }


    return(
        <div>
          <div>
            <button>Show Shoes</button>
            <button>Show T shirt</button>
            <button>Show Trekking bag</button>
          </div>
        </div>
    )
}

export default TrekkingBag