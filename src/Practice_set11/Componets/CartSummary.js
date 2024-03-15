import { useContext } from "react"
import { CartContext } from "../Context/CartTotalContext"

const CartSummary = () => {
    const {items} = useContext(CartContext)
    return(
        <div>
           <h2>Shopping Cart Summary</h2>
           <h3>Cart Total :   </h3>
           <p>No Item in cart</p>
           <h3>Available Items</h3>
           <ul>
            {items.map(item => (
                <>
                 <li>{item.name} - ${item.price}</li>
                 <button>Add to cart</button>
                 <br/>
                </>
            ))}
           </ul>
           <hr/>

        </div>
    )
}

export default CartSummary