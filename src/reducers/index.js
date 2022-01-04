import { combineReducers } from "redux";
import citasReducer from "./citasReducer";

const reducer = combineReducers({
    citas:citasReducer
})

export default reducer