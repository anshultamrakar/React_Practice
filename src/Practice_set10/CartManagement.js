
import { useContext } from "react"
import { MyCartContext } from "./Context/CartContext"

const CartManagement = () => {
    const {state , dispatch} = useContext(MyCartContext)
    return(
        <div>
            <h2>Cart Management</h2>
            <ul>
                {state.cart.map(item => (
                    <>
                      <li>
                        <p>Product Name : {item?.name}</p>
                        <p>Price INR : {item?.price}</p>
                    </li>
                    <div>
                    <button onClick={() => dispatch({type : "increment qty" , payload : item})}>+</button>
                    <p>Quantity : {item?.quantity}</p>
                    <button onClick={() => dispatch({type : "decrement qty" , payload : item})}>-</button>
                    </div>
                    <button onClick={() => dispatch({type : "remove" , payload : item})}>Remove</button>
                    <button onClick={() => dispatch({type : "move_to_wishlist" , payload : item})}>Move to Wish list</button>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default CartManagement