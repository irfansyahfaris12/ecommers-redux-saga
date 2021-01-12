import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FetchProductStart } from "../../redux/Product/product.actions";
import Product from "./Product";
import FormSelect from "../Form/FormSelect";
import LoadMore from "../LoadMore";
import "./styles.scss";

const mapState = ({ productData }) => ({
  product: productData.product,
});

const ProductResult = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { product } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = product;

  useEffect(() => {
    dispatch(FetchProductStart({ filterType }));
  }, [filterType]);

  const handleFilters = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>no search result</p>
      </div>
    );
  }

  const configFilters = {
    defalutValue: filterType,
    options: [
      {
        name: "show all",
        value: "",
      },
      {
        name: "Mens",
        value: "mens",
      },
      {
        name: "Womens",
        value: "womens",
      },
    ],
    handleChange: handleFilters,
  };

  const handleLoadMore = () => {
    dispatch(
      FetchProductStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProduct: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvn: handleLoadMore,
  };

  return (
    <div className="products">
      <h1>Browse Product</h1>
      <FormSelect {...configFilters} />
      <div className="productResults">
        {data.map((products, pos) => {
          const { productThumbnail, productName, productPrice } = products;
          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === "undefined"
          )
            return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice,
          };
          return <Product key={pos} {...configProduct} />;
        })}
      </div>
      {!isLastPage && (<LoadMore {...configLoadMore} />)}
    </div>
  );
};

export default ProductResult;
