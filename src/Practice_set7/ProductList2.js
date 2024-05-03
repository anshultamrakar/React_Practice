import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'

const ProductList2 = () => {
  const [products , setProducts] = useState([])
  const [isLoader , setIsLoader] = useState(true)

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
      try{
      const response = await fakeFetch("https://example.com/api/products")
      if(response.status === 200){
        setProducts(response?.data?.products)
        setIsLoader(false)
      }
      }catch(err){
        console.log(err)
      }
    }

    const handleSortPrice = () => {
      const sortPrice = [...products].sort((a,b) => a.price - b.price)
      setProducts(sortPrice)
    }

    const handleSortHigh = () => {
        const sortPrice = [...products].sort((a,b) => b.price - a.price)
        setProducts(sortPrice)
      }

      const handleReset = () => {
        getData()
      }
  

  return (
    <div>
        {isLoader ? <p>loading....</p> :
        <>
        <h2>Product List</h2>
        <button onClick={handleSortPrice}>Sort By Price(Low to High)</button>
        <button onClick={handleSortHigh}>Sort By Price(High to Low</button>
        <button onClick={handleReset}>Reset</button>
        <ul>
            {products.map(product => (
                <li>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                </li>
            ))}
        </ul>
        </>}
    </div>
  )
}

export default ProductList2