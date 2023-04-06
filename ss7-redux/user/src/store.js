import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer/combine";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)
export default store;