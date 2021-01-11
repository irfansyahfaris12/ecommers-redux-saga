import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProductStart } from "../../redux/Product/product.actions";
import Product from "./Product";
import './styles.scss'

const mapState = ({ productData }) => ({
  product: productData.product,
});

const ProductResult = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);

  useEffect(() => {
    dispatch(
      FetchProductStart()
    )
  }, []);

  if (!Array.isArray(product)) return null;
  if (product.length < 1) {
    return (
      <div className="products">
        <p>no search result</p>
      </div>
    );
  }

  return (
    <div className="products">
      <h1>Browse Product</h1>
      <div className="productResults">
      {product.map((products, pos) => {
        const { productThumbnail, productName, productPrice } = products;
        if (!productThumbnail || !productName ||
          typeof productPrice === 'undefined') return null;

        const configProduct = {
          productThumbnail,
          productName,
          productPrice,
        };
        return (
          <Product key={pos} {...configProduct} />
        );
      })}
      </div>
    </div>
  );
};

export default ProductResult;
