import axios from "axios"
import { PRODUCT_STATUS_LOADING, PRODUCT_STATUS_SUCCEEDED, PRODUCT_STATUS_FAILED,  GET_PRODUCTS } from "./constants"


export function loading() {
    return { type: PRODUCT_STATUS_LOADING };
  }
  
  export function succeeded() {
    return { type: PRODUCT_STATUS_SUCCEEDED };
  }
  
  export function failed() {
    return { type: PRODUCT_STATUS_FAILED };
  }


export function getProducts(product){
    return function(dispatch) {
        dispatch(loading())
        try {
            const { data } = axios.get(`http://localhost:1337/api/search?q=${product}`)
            dispatch({ 
                type: GET_PRODUCTS, 
                payload: data
            })
        } catch(error){
            dispatch(failed())
            console.log(error)
        }
        
    }
}

