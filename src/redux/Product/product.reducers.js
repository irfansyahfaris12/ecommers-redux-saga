import productTypes from './product.types';

const INITIAL_STATE = {
    product:[],
    productDetail: {}
}
const productReducers = (state=INITIAL_STATE, action ) => {
    switch(action.type){
        case productTypes.SET_PRODUCT:
            return{
                ...state,
                product: action.payload
            }
        case productTypes.SET_PRODUCT_DETAIL:
            return{
                ...state,
                productDetail: action.payload
            }

        default:
            return state;
    }
}

export default productReducers;