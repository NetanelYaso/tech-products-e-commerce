import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST
} from "../constants/order-contanst";


export const createOrder = (order) => async (dispatch, getState) => {

    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Athorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/users/profile`, user, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
} 