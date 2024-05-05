import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'


const ProductData = () => {
    const [productData , setProductData] = useState([])
    const [sortData , setSortData] = useState([])
    const [isLoader , setIsLoader] = useState(true)


    useEffect(() => {
        getData()
    },[])


    const getData = async() => {
      try{
      const response = await fakeFetch("https://example.com/api/products")
      if(response.status === 200){
       setProductData(response.data.products)
       setSortData(response?.data?.products.sort((a,b) => a.quantity - b.quantity))
       setIsLoader(false)
      }
      }catch(err){
        console.log(err)
      }
    }



  return (
    <div>
        <h2>Product Data</h2>
        <ul>
            {isLoader ? <p>Loading....</p> : sortData.map(product => (
                <li>
                    <p>Name :{product.name}</p>
                    <p> Price :{product.price}</p>
                    <p> Quantity :{product.quantity}</p>
                    <p> Rating : {product.rating}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductData