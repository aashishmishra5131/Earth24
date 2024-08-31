import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import {thunk} from 'redux-thunk';
import { authReducer } from "./Auth/Reducer.js";
import { customerProductReducer } from "./Product/Reducer.js";
import { cartReducer } from "./Cart/Reducer.js";
import { orderReducer } from "./Order/Reducer.js";

const rootReducers = combineReducers({
    auth: authReducer,
    product: customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk));
