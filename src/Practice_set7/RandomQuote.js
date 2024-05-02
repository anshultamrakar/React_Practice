import React from 'react'
import { useState , useEffect } from 'react'
import { fakeFetch } from './FakeFetch'

const RandomQuote = () => {
    const [contentData , setContentData] = useState(null)
    const [isLoader , setIsLoader] = useState(true)


    useEffect(() => {
        getData()
    },[])


    const getData = async() => {
      try{
      const response = await fakeFetch() 
      setContentData(response)
      setIsLoader(false)
      }catch(err){
        console.log(err)
      }
    }


    const handleNewQuote = async() => {
        const newQuote = await fakeFetch()
        setContentData(newQuote)
    }
    
  return (
    <div>
        {isLoader ? <p>Loading.....</p> :
        <>
         <h2>Random Quotes</h2>
        <p>Quote : {contentData?.content}</p>
        <p>Author -{contentData?.author}</p>
        <button onClick={handleNewQuote}>New quotes</button>
        </>}
    </div>
  )
}

export default RandomQuote