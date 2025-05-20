import { combineReducers } from "redux"; 

import cartReducer from "./CartReducer";
import productReducer from "./ProductReducer";


const rootReducer = combineReducers ({
    productReducer: productReducer,
    listCart : cartReducer
});
export default rootReducer;