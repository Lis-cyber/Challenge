import { createStore, applyMiddleware, compose } from "redux";
//compose only if we need
// --> Remember only one store per app
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

//----> composeEnhancer: funciones de orden superior que agregan algunas funciones adicionales al store