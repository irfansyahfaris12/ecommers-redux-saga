import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  FetchProductDetailStart,
  setProductDetail,
} from "../../redux/Product/product.actions";
import { addProduct } from "../../redux/Cart/cart.actions"
import Button from "../Form/Button";
import "./styles.scss";

const mapState = (state) => ({
  productDetail: state.productData.productDetail,
});

const ProductCard = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector(mapState);
  const history = useHistory()

  const {
    productName,
    productThumbnail,
    productPrice,
    productDesc,
  } = productDetail;


  useEffect(() => {
    dispatch(FetchProductDetailStart(productID));

    return () => {
      dispatch(setProductDetail({}));
    };
  }, []);

  const handleAddTocart = (product) => {
      if(!product) return;
    dispatch(
        addProduct(product)
    )
    history.push("/cart")
  }

  const configAddToCartBtn = {
    type: "button",
  };

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="productDetail">
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>$ {productPrice}</span>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }}
            />
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddTocart(productDesc)}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
