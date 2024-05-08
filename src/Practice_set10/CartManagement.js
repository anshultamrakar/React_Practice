import { useReducer, useState } from "react"
import {productData} from "./CartData"

const CartManagement = () => {
    function cartReducer(state , action){
        switch(action.type){
            case "increment qty": 
          console.log("hello")
        }
    }
    const [state , dispatch] = useReducer(cartReducer , {cart : productData})
     
    return(
        <div>
            <h2>Cart Management</h2>
            <ul>
                {state.cart.map(item => (
                    <li>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartManagement