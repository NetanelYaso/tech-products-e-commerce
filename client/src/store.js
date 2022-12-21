import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import {
    productListReducer,
    productDetalisReducer
} from "./reducers/product-reducers"



const reducer = combineReducers({
    productList: productListReducer,
    productDetalis: productDetalisReducer,

})

const initialState = {}

const middlewere = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewere))
)

export default store;