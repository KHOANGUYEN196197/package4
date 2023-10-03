import { createStore } from "redux";
import countReducer from "./CountReducer";

const store = createStore(countReducer)


export default store;