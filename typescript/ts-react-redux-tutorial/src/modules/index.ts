import { combineReducers } from "redux";
import counter from "./counter";
import index from "./todos";
import github, {githubSaga} from "./github";
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    todos: index,
    github
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([githubSaga()]);
}