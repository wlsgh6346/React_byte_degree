import { combineReducers } from "redux"; //root reducer 만들 함수
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;