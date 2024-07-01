import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import {thunk} from 'redux-thunk';
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    product: customerProductReducer,
    cart:cartReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk));
