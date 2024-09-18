import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "../actions/ActionType";

const initialState = {
  loading: false,
  paymentLinkUrl: null,
  error: null,
  paymentData: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYMENT_REQUEST:
    case UPDATE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentLinkUrl: action.payload,
      };

    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentData: action.payload,
      };

    case CREATE_PAYMENT_FAILURE:
    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;
