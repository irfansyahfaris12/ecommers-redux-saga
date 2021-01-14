import { createSelector } from "reselect";

export const selectCartData = state => state.cartData

export const selectCartItem = createSelector(
    [selectCartData],
    cartData => cartData.cartItem
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems => 
    cartItems.reduce(
        (quantity, cartItem) =>
          quantity + cartItem.quantity
        , 0)
) 