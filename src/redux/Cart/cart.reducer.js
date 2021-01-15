import cartTypes from "./cart.types";
import { handleAddToCart, handleRemoveCartItem, hanldleReduceCartItem } from "./cart.utils"

const INITIAL_STATE = {
    cartItem: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case cartTypes.ADD_TOO_CART:
            return{
                ...state,
                cartItem: handleAddToCart({
                    prevCartItem: state.cartItem,
                    nextCartItem: action.payload
                })
            }
        case cartTypes.REMOVE_CART_ITEM:
            return{
                ...state,
                cartItem: handleRemoveCartItem({
                    prevCartItem: state.cartItem,
                    cartItemToRemove: action.payload
                })
            }
        case cartTypes.REDUCE_CART_ITEM:
                return{
                    ...state,
                    cartItem: hanldleReduceCartItem({
                        prevCartItem: state.cartItem,
                        cartItemToReduce: action.payload
                    })
                }
        default:
            return state
    }
}   

export default cartReducer;