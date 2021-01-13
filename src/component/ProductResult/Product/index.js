import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Form/Button";

const Product = ({
  documentID,
  productThumbnail,
  productName,
  productPrice,
}) => {
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;

  const configAddToCartBtn = {
    type: "button",
  };
  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <Link to={`/product/${documentID}`}>
              <span className="name">{productName}</span>
            </Link>
          </li>
          <li>
            <Link to={`/product/${documentID}`}>
              <span className="price">$ {productPrice}</span>
            </Link>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn}>add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
