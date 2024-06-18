import { useContext } from "react"
import { CartContext } from "./CartContext"



const CartManagement = ({}) => {
 const {state , dispatch} = useContext(CartContext)
     
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
              <button onClick={() => dispatch({type : 'move_to_wishlist' , payload : item.id})} className="mx-4">Move to wishlist</button>
            </div>
           ))}
           <br/>
           <h1 className="text-center text-2xl">WishList</h1>
           {state.itemsInWish.map(item => (
            <div className="border-solid border-2 border-black-500 m-4 p-4">
            <h2>{item.name}</h2>
            <p> Price : {item.price}</p>
            </div>
           ))}
        </div>
    )
}

export default CartManagement