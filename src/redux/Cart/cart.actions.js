import cartTypes from "./cart.types";

export const addProduct = (nextCartItem) => ({
    type: cartTypes.ADD_TOO_CART,
    payload: nextCartItem
})