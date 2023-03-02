import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  }from "redux";
  import thunk from "redux-thunk";
  import { authReducer } from "./auth/reducer";
  // import { Productreducer } from "./products/product.reducer";
  import { cartReducer } from "./cart/cart.reducer";
  let rootReducer = combineReducers({ auth: authReducer,
    cart:cartReducer,
    // product:Productreducer
  });
  const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));
  export default store;
