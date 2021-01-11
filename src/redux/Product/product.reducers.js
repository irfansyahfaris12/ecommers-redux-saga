import productTypes from './product.types';

const INITIAL_STATE = {
    product:[]
}
const productReducers = (state=INITIAL_STATE, action ) => {
    switch(action.type){
        case productTypes.SET_PRODUCT:
            return{
                ...state,
                product: action.payload
            }

        default:
            return state;
    }
}

export default productReducers;