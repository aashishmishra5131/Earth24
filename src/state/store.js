import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from 'redux-thunk';
import { authReducer } from "./Auth/Reducer";

const rootReducers = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk));
