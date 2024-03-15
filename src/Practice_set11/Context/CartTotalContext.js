import { createContext } from "react"; 

const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ]
  

export const CartContext = createContext();

const CartProvider = ({children}) => {
    return(
        <CartContext.Provider value = {{items}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider