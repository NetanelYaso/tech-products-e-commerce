import { CART_ADD_ITEM, CART_REAMOVE_ITEM } from "../constants/cart-constants"


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(currenctItem => currenctItem.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((currenctItem) => currenctItem.product === existItem.product ?
                        item : currenctItem
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

            
        default:
            return state
        
    }
}