import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductStart,
  FetchProductStart,
  DeleteProductStart,
} from "../../redux/Product/product.actions";
import CKEditor from "ckeditor4-react";
import Modal from "../../component/Modal";
import FormInput from "../../component/Form/FormInput";
import FormSelect from "../../component/Form/FormSelect";
import Button from "../../component/Form/Button";
import LoadMore from "../../component/LoadMore";
import "./styles.scss";

const mapState = ({ productData }) => ({
  product: productData.product,
});

const Admin = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState("mens");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");

  const { data, queryDoc, isLastPage } = product;

  useEffect(() => {
    dispatch(FetchProductStart());
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory("mens");
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      AddProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      FetchProductStart({
        startAfterDoc: queryDoc,
        persistProduct: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvn: handleLoadMore,
  };

  return (
    <div className="admin">
      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>Add new product</Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <h2>Add new product</h2>

            <FormSelect
              label="Category"
              options={[
                {
                  value: "mens",
                  name: "Mens",
                },
                {
                  value: "womens",
                  name: "Womens",
                },
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={(e) => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={(e) => setProductPrice(e.target.value)}
            />

            <CKEditor
              onChange={(evt) => setProductDesc(evt.editor.getData())}
            />

            <br />

            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>Manage Product</h1>
              </th>
            </tr>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((products, index) => {
                        const {
                          productName,
                          productThumbnail,
                          productPrice,
                          documentID,
                        } = products;

                        return (
                          <tr>
                            <td>
                              <img className="thumb" src={productThumbnail} />
                            </td>
                            <td>{productName}</td>
                            <td>${productPrice}</td>
                            <td>
                              <Button
                                onClick={() =>
                                  dispatch(DeleteProductStart(documentID))
                                }
                              >
                                delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>{!isLastPage && <LoadMore {...configLoadMore} />}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
