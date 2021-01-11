import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleAddProduct, handleFetchProduct, handleDeleteProduct } from "./product.helpers";
import { SetProduct, FetchProductStart } from './product.actions';
import { auth } from "../../firebase/utils";
import productTypes from "./product.types";

export function* fectProduct() {
    try{
        const product = yield handleFetchProduct();
        yield put(
            SetProduct(product)
        )
    }catch(err){
        // console.log(err)
    }
}

export function* onFetchProductStart() {
  yield takeLatest(productTypes.FETCH_PRODUCT_START, fectProduct);
}

export function* addProduct({
  payload: { productCategory, productName, productThumbnail, productPrice },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createDate: timestamp,
    });
    yield put(
      FetchProductStart()
    )
  } catch (err) {
    //   console.log(err)
  }
}
export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* DeleteProduct({ payload }) {
  try{
    yield handleDeleteProduct(payload)
    yield put(
      FetchProductStart()
    )
  }catch(err){
    // console.log(err)
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productTypes.DELETE_PRODUCT_START, DeleteProduct)
}

export default function* productSagas() {
  yield all([call(onAddProductStart), call(onFetchProductStart), call(onDeleteProductStart)]);
}
