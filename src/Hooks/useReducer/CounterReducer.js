import { useReducer } from "react"

function reducer(state , action){
   switch(action.type){
    case "INCREMENT_COUNTER": 
    return {...state , count : state.count + 1}
    case "DECREMENT_COUNTER" : 
    return {...state , count : state.count - 1}
    default : 
    return state
   }
}

const CounterReducer = () => {
    const [state , dispatch] = useReducer(reducer , {count : 0})
    return(
        <div>
          <h1 className="text-center text-xl ">Count - {state.count} </h1>
          <div className="flex justify-center gap-4">
            <button onClick={() => dispatch({type : "INCREMENT_COUNTER" })}>+ </button>
            <button onClick={() => dispatch({type : "DECREMENT_COUNTER" })}>-</button>
          </div>
        </div>
    )
}


export default CounterReducer