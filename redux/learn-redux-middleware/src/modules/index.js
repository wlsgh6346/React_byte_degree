import {combineReducers} from "redux";
import counter from "./Counter";
import posts from "./posts";

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;