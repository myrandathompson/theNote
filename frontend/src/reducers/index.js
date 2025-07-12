import {combineReducers} from "redux"
import authReducer from "./auth"
import currentUserReducer from "./currentuser";
import usersReducer from "./users";
import questionReducer from "./question";

export default combineReducers({
    authReducer,
    currentUserReducer,
    usersReducer,
    questionReducer,
});