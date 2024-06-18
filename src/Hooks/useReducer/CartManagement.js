import { useReducer } from "react"
const  itemsInCart =  [
    {
      "id": 1,
      "name": "kala chasma",
      "price": 1000, 
      "quantity" : 1
    },
    {
      "id": 2,
      "name": "laal chhadi",
      "price": 500, 
      "quantity" : 1
    },
    {
      "id": 3,
      "name": "jalebi",
      "price": 50,
      "quantity" : 1
    },
    {
      "id": 4,
      "name": "japani joota",
      "price": 10000,
      "quantity" : 1
    }
  ]


  function cartReducer(state , action){
    switch(action.type){
       case "increment_qty" : {
        return {...state , itemsInCart: state.itemsInCart.map(item => item.id === action.payload ? {...item , quantity : item.quantity + 1 } : item) }
       }
       case "decrement_qty" : {
        return {...state , itemsInCart : state.itemsInCart.map(item => item.id === action.payload ? {...item , quantity : item.quantity - 1 } : item)  }
       }
       case "remove_item" : 
       return {...state , itemsInCart : state.itemsInCart.filter(item => item.id !== action.payload)}
       default : 
       return state;
    }
  }


const CartManagement = () => {
      const [state, dispatch] = useReducer(cartReducer , {itemsInCart })
    return(
        <div>
          <h1 className="text-center text-2xl">Cart Managment</h1>
           {state.itemsInCart.map(item => (
            <div className="border-solid border-2 border-black-500 m-4 p-4">
            <h2>{item.name}</h2>
            <p> Price : {item.price}</p>
              <div className="flex gap-3"> 
                <button onClick={() => dispatch({type : 'increment_qty' , payload : item.id})}>+</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch({type : 'decrement_qty' , payload : item.id})}>-</button>
              </div>
              <button onClick={() => dispatch({type : 'remove_item' , payload : item.id})}>Remove</button>
            </div>
           ))}
        </div>
    )
}

export default CartManagement