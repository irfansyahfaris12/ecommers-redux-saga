import productTypes from './product.types';

export const AddProductStart = productData => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: productData
})

export const FetchProductStart = () => ({
    type: productTypes.FETCH_PRODUCT_START
})

export const SetProduct = product => ({
    type: productTypes.SET_PRODUCT,
    payload: product
})

export const DeleteProductStart = productID => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productID
})