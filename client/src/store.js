import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import {
    productListReducer,
    productDetalisReducer
} from "./reducers/product-reducers"
import { cartReducer } from "./reducers/cart-reducers"

const reducer = combineReducers({
    productList: productListReducer,
    productDetalis: productDetalisReducer,
    cart: cartReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
}


const middlewere = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewere))
)

export default store;