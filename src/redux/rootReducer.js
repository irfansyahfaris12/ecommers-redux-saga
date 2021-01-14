import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import productReducers from './Product/product.reducers';
import cartReducer from './Cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    productData: productReducers,
    cartData: cartReducer
});
