import cartReducer from "./CartReducer";
import { createStore } from 'redux'

const store = createStore(cartReducer);
export default store