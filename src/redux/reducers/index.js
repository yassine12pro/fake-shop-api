import { combineReducers } from "redux";
import {productReducer, selectedProductReducer} from "../reducers/productreducer"
   const reducers = combineReducers(
    {
        AllProducts : productReducer,
        product : selectedProductReducer

    }
)
export default reducers