import { PRODUCT_STATUS_LOADING, PRODUCT_STATUS_SUCCEEDED, PRODUCT_STATUS_FAILED,  GET_PRODUCTS } from "./constants"


const initialState = {
  products: []
}
// --> No se está muteando el estado, se devuelve un nuevo objeto
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state, // Se crea una copia del estado
        products: state.products.concat(action.payload)
      }
    default: 
      return state;
  }
}

export default reducers