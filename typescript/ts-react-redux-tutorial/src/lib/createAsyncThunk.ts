import {Dispatch} from "redux";
import {AsyncActionCreator} from "typesafe-actions";

type AnyAsyncActionCreator = AsyncActionCreator<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<
    A extends AnyAsyncActionCreator,
    F extends AnyPromiseCreator
    >(asyncActionCreator: A, promiseCreator: F) {
    type Params = Parameters<F>;    //F라는 함수에 어떤 파라미터를 넣어야 하는지 추출해 준다.
    return function thunk(...params: Params) {
        return async (dispatch: Dispatch) => {
            const { request, success, failure } = asyncActionCreator;
            dispatch(request(undefined));

            try {
                const result = await promiseCreator(...params);
                dispatch(success(result));
            } catch (e) {
                dispatch(failure(e));
            }
        };
    };
}