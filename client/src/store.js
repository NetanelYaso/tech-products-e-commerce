import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import {
    productListReducer,
    productDetalisReducer
} from "./reducers/product-reducers"
import { cartReducer } from "./reducers/cart-reducers"
import { userLoginReducer } from "./reducers/user-reducers"

const reducer = combineReducers({
    productList: productListReducer,
    productDetalis: productDetalisReducer,
    cart: cartReducer,
    userLogin: userLoginReducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: {userInfo:userInfoFromStorage}
}


const middlewere = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewere))
)

export default store;