import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleAddProduct, handleFetchProduct, handleDeleteProduct, handleFetchProductDetail } from "./product.helpers";
import { SetProduct, FetchProductStart, setProductDetail } from './product.actions';
import { auth } from "../../firebase/utils";
import productTypes from "./product.types";

export function* fectProduct({ payload }) {
    try{
        const product = yield handleFetchProduct(payload);
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
  payload
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
     ...payload,
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

export function* fetchProductDetail({ payload }){
  try{
    const productDetail = yield handleFetchProductDetail(payload);
    yield put(
      setProductDetail(productDetail)
    )

  }catch(err){
    // console.log(err)
  }
}

export function* onFetchProductDetailStart(){
  yield takeLatest(productTypes.FETCH_PRODUCT_DETAIL_START, fetchProductDetail)
}

export default function* productSagas() {
  yield all([call(onAddProductStart), call(onFetchProductStart), call(onDeleteProductStart), call(onFetchProductDetailStart)]);
}
