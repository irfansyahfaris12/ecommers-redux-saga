export const existingCartItem = ({
    prevCartItem,
    nextCartItem
}) => {
    return prevCartItem.find(
        cartItem => cartItem.documentID === nextCartItem.documentID
    )
}

export const handleAddToCart = ({ prevCartItem, nextCartItem }) => {
    const quantityIncrement = 1;
    const cartItemExist = existingCartItem({ prevCartItem, nextCartItem })

    if(cartItemExist){
        return prevCartItem.map(cartItem => 
            cartItem.documentID == nextCartItem.documentID
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
            )
    }
    return [
        ...prevCartItem,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]
}