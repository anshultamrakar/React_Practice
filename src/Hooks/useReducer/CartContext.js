import { createContext, useReducer } from "react";

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

export const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer , {itemsInCart})
  
  return(
    <CartContext.Provider value = {{state , dispatch}}>
        {children}
    </CartContext.Provider>
  )
}


export default CartProvider 
