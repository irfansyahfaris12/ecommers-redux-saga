import React from "react";
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from "../../../redux/Cart/cart.actions";


const Item = (product) => {
    const dispatch = useDispatch()
  const {
    productName,
    productPrice,
    productThumbnail,
    quantity,
    documentID,
  } = product;

  const handleAddProduct = (product) =>{
    dispatch(
      addProduct(product)
    )
  }

  const handleRemoveCartItem = (documentID) => {
      dispatch(
        removeCartItem({ documentID })
      )
  }

  const handleReduceCartItem = (product) => {
    dispatch(
      reduceCartItem(product )
    )
  }

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <span onClick={() => handleReduceCartItem(product)}> - </span>
            <span>{quantity}</span>
            <span onClick={() => handleAddProduct(product)}> + </span>
          </td>
          <td>${productPrice}</td>
          <td align="center">
            <span className="cartBtn remove" onClick={() => handleRemoveCartItem(documentID)}>X</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
