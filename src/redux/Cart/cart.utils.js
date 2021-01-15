export const existingCartItem = ({ prevCartItem, nextCartItem }) => {
  return prevCartItem.find(
    (cartItem) => cartItem.documentID === nextCartItem.documentID
  );
};

export const handleAddToCart = ({ prevCartItem, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExist = existingCartItem({ prevCartItem, nextCartItem });

  if (cartItemExist) {
    return prevCartItem.map((cartItem) =>
      cartItem.documentID == nextCartItem.documentID
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem
    );
  }
  return [
    ...prevCartItem,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveCartItem = ({ prevCartItem, cartItemToRemove }) => {
  return prevCartItem.filter(
    (item) => item.documentID !== cartItemToRemove.documentID
  );
};

export const hanldleReduceCartItem = ({ prevCartItem, cartItemToReduce }) => {
  const existingCartItem = prevCartItem.find(
    (cartItem) => cartItem.documentID === cartItemToReduce.documentID
  );

  if (existingCartItem.quantity === 1) {
    return prevCartItem.filter(
      (cartItem) => cartItem.documentID !== existingCartItem.documentID
    );
  }

  return prevCartItem.map((cartItem) =>
    cartItem.documentID === existingCartItem.documentID
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
