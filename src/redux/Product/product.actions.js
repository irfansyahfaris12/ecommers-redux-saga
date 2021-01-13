import productTypes from './product.types';

export const AddProductStart = productData => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: productData
})

export const FetchProductStart = (filters={}) => ({
    type: productTypes.FETCH_PRODUCT_START,
    payload: filters
})

export const SetProduct = product => ({
    type: productTypes.SET_PRODUCT,
    payload: product
})

export const DeleteProductStart = productID => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productID
})

export const FetchProductDetailStart = productID => ({
    type: productTypes.FETCH_PRODUCT_DETAIL_START,
    payload: productID
})

export const setProductDetail = product => ({
    type: productTypes.SET_PRODUCT_DETAIL,
    payload: product
})