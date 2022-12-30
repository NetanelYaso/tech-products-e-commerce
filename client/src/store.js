import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import {
    productListReducer,
    productDetalisReducer
} from "./reducers/product-reducers"
import { cartReducer } from "./reducers/cart-reducers"
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./reducers/user-reducers"
import { orderCreateReducer } from "./reducers/order-reducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetalis: productDetalisReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userProfilrUpdate: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
    userLogin: { userInfo: userInfoFromStorage },

}


const middlewere = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewere))
)

export default store;