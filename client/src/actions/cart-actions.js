import axios from "axios";
import {
    CART_ADD_ITEM,
    CART_REAMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from "../constants/cart-constants"


export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/byId/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.product._id,
            name: data.product.name,
            image: data.product.image,
            price: data.product.price,
            countInStock: data.product.countInStock,
            quantity
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}


export const reamoveFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REAMOVE_ITEM,
        payload: id
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}


export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}