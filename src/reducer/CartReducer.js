
const cartReducer =(state,action) =>{
    console.log(state);
    if(action.type === "ADD_TO_CART"){
        let { id, color, amount, product } = action.payload;
        
        let cartProduct;
        cartProduct = {
            id:id+color,
            name:product.name,
            color,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock,
        };
        // localStorage.setItem("shoppingCart",...state)
        console.log(state);
        return{
            ...state,
            cart:[...state.cart, cartProduct],
        }
    }


    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
        };
    }

    if(action.type === "CLEAR_CART"){
        return{
            ...state,
            cart:[],
        }
    }
    return state;
}
export default cartReducer;