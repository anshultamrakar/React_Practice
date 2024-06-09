import React, { useRef, useState } from 'react'

const Demo2 = () => {
    const [y , setY]  = useState(10)
    let x = 10;   
    const ref = useRef(0)
  return (
    <div className='m-4 p-2 border border-black w-96 h-96'>
        <button onClick={() => {
            x = x + 1 
            console.log(x)
        }}>Increse x</button>
        <h1 className='text-xl'>let = {x}</h1>
        <button onClick={() => setY(y + 1)}>Increase y</button>
        <h1>State = {y}</h1>
        <button onClick={() => {
          ref.current = ref.current + 1
          console.log(ref.current)
        }} >Ref y</button>
        <h1>Ref  = {ref.current}</h1>
    </div>
  )
}

export default Demo2