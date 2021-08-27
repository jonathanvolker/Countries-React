import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const store = createStore(
    rootReducer,
    composeWithDevTools(
       applyMiddleware(thunk)
  )); // me permite hacer las action asincronicas de request
export default store;