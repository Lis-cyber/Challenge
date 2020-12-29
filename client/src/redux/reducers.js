import { PRODUCT_STATUS_LOADING, PRODUCT_STATUS_SUCCEEDED, PRODUCT_STATUS_FAILED,  GET_PRODUCTS } from "./constants"


const initialState = {
  products: [],
  status: "idle", // -- Estado Stand-by
  
}

// --> No se está muteando el estado, se devuelve un nuevo objeto
const reducersProducts = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_STATUS_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case PRODUCT_STATUS_FAILED:
      return {
        ...state,
        status: "failed",
      };

    case PRODUCT_STATUS_SUCCEEDED:
      return {
        ...state,
        status: "succeeded",
      };
    case GET_PRODUCTS:
      return {
        ...state, // Se crea una copia del estado
        products: state.products.concat(action.payload),
        status: "idle"
      }
    default: 
      return state;
  }
}

export default reducersProducts