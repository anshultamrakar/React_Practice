
export function cartReducer(state , action){
    switch(action.type){
        case "increment qty": 
         return {...state , cart : state.cart.map(item => item.id === action.payload.id ? {...item , "quantity" : action.payload.quantity + 1 } : item)}
        case "decrement qty" : 
         return {...state , cart : state.cart.map(item => item.id === action.payload.id ? {...item , "quantity" : action.payload.quantity - 1 } : item)}
        case "remove" :
            return {...state , cart : state.cart.filter(item => item.id !== action.payload.id)}
         default : 
      return state
    }
}