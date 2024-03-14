import { createContext } from "react"; 

export const CartContext = createContext();

const CardProvider = ({children}) => {
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export default CardProvider