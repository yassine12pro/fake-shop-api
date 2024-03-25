import { actionTypes } from "../constants/action-types";

const initstate ={
    products : [],
}
export const productReducer = (state = initstate,{type , payload}) =>{
    switch (type){
        case actionTypes.SET_PRODUCTS:
            return {...state , products: payload };
        default:
            return state    
    }
     
}
export const selectedProductReducer = (state = {},{type , payload}) =>{
    switch (type){
        case actionTypes.SELECTED_PRODUCTS:
            return {...state ,  ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCTSSELECTED_PRODUCTS:
            return {};
        default:
            return state    
    }
     
}