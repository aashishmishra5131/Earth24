import { api } from "../../../config/apiConfig";
import {
  CANCELED_ORDERS_FAILURE,
  CANCELED_ORDERS_REQUEST,
  CANCELED_ORDERS_SUCCESS,
  CONFIRMED_ORDERS_FAILURE,
  CONFIRMED_ORDERS_REQUEST,
  CONFIRMED_ORDERS_SUCCESS,
  DELETE_ORDERS_FAILURE,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELIVERED_ORDERS_FAILURE,
  DELIVERED_ORDERS_REQUEST,
  DELIVERED_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SHIP_ORDERS_FAILURE,
  SHIP_ORDERS_REQUEST,
  SHIP_ORDERS_SUCCESS,
} from "./ActionType";

export const getOrders = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
      const response = await api.get(`/api/admin/orders/`);
      dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
    }
  };
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDERS_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    const data = response.data;
    dispatch({ type: CONFIRMED_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CONFIRMED_ORDERS_FAILURE, payload: error.message });
  }
};

export const shipOrder = (orderId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHIP_ORDERS_REQUEST });
      const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
      dispatch({ type: SHIP_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SHIP_ORDERS_FAILURE, payload: error.message });
    }
  };
};

export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDERS_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
    dispatch({ type: DELIVERED_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELIVERED_ORDERS_FAILURE, payload: error.message });
  }
};

export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch({type:CANCELED_ORDERS_REQUEST})
     try {
         const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
         dispatch({type:CANCELED_ORDERS_SUCCESS, payload:response.data})
     } catch (error) {
         dispatch({type:CANCELED_ORDERS_FAILURE, payload:error.message});
     }
};

export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_ORDERS_REQUEST });
      const { data } = await api.put(`/api/admin/orders/${orderId}/delete`);
      dispatch({ type: DELETE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_ORDERS_FAILURE, payload: error.message });
    }
  };
};
