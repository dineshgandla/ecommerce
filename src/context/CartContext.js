import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer'
const cartContext = createContext();

const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("shoppingCart");
    if(localCartData === ''){
        return []
    }else{
        return JSON.parse(localCartData)
    }
}

const initialState = {
    cart : [],
    // cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
}

const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);
    const addToCart = (id, color, amount, product) =>{
        
        dispatch({type:"ADD_TO_CART", payload:{ id, color, amount, product}})
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };

    useEffect(()=>{
        localStorage.setItem("shoppingCart",JSON.stringify(state.cart))
    },[state.cart]);

    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"});
        
    }

    return(

        <cartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>
            {children}
        </cartContext.Provider>
    );
}

const useCartContext = () =>{
    return useContext(cartContext);
}

export {CartProvider, useCartContext};