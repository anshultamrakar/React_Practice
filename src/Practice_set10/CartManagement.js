
import { useContext } from "react"
import { MyCartContext } from "./Context/CartContext"

const CartManagement = () => {
    const {state , dispatch} = useContext(MyCartContext)
   
    return(
        <div>
            <h2>Cart Management</h2>
            <ul>
                {state.cart.map(item => (
                    <div style={{border : "1px solid black" , padding : "20px" , margin : "10px"}}>
                      <li style = {{listStyleType : "none" , display : "flex" }}>
                        <p>Product Name : {item?.name}</p>
                        <p>Price INR : {item?.price}</p>
                    </li>
                    <div style = {{display : "flex" , gap : "20px"}}>
                    <button onClick={() => dispatch({type : "increment qty" , payload : item})}>+</button>
                    <p>Quantity : {item?.quantity}</p>
                    <button onClick={() => dispatch({type : "decrement qty" , payload : item})}>-</button>
                    </div>
                     <br/>
                    <button onClick={() => dispatch({type : "remove" , payload : item})}>Remove from cart</button>
                    <br/>
                    <button onClick={() => dispatch({type : "move_from_wish" , payload : item})}>Move to Wish list</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CartManagement