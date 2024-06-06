import React, { useCallback, useEffect, useState } from 'react'
import { useMemo } from 'react'



const Demo1 = () => {
  const [userNumber , setUserNumber] = useState("")
  const [randomInput , setRandomInput] = useState("")

  const fib = useCallback((n) => {
    return (n <= 1 )? n : fib(n-1) + fib(n-2)
  }, [])


  const fibNumber = useMemo(() => fib(userNumber) , [userNumber , fib])


  useEffect(() => {
    console.log("new")
  },[fibNumber])


  return (
    <div style = {{margin : "50px" , border : "1px solid black" , width : "25%" , padding : "20px" }}>
         <br/>
        <input placeholder='Enter numbers' value = {userNumber} onChange={(e) => setUserNumber(e.target.value)}/>
        <p>Number : {fibNumber || "--"}</p>
        <h2>Random Input</h2>
        <input type = "text" placeholder='Random Input' value = {randomInput} onChange={(e) => setRandomInput(e.target.value) }/>
    </div>
  )
}

export default Demo1