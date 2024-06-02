import { useReducer } from "react"
import { useContext } from "react"
import { MyCartContext } from "./Context/CartContext"


const WishList = () => {
  const {state, dispatch} = useContext(MyCartContext)
  console.log(state)
    return(
        <div>
          <h2>Wish List</h2>
          <ul>
          {state.wishList.map(item => (
              <li>
                <p>Product Name : {item?.name}</p>
                <p>Price INR : {item?.price}</p>
              </li>
          ))}
          </ul>
        </div>
    )
}

export default WishList