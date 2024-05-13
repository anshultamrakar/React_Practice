import { createContext } from "react";
import {productData} from "../CartData"
import { useReducer } from "react";
import { cartReducer } from "../CartReducer";

export const MyCartContext = createContext()


const MyCartProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer , {cart : productData , wishList : []})

    return(
        <MyCartContext.Provider value = {{state , dispatch}}>
           {children}
        </MyCartContext.Provider>
    )
}


export default MyCartProvider