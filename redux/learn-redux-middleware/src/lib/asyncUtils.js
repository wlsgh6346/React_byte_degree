import { call, put } from 'redux-saga/effects';

export const createPromiseSaga = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action) {
        try {
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type: SUCCESS,
                payload: result
            });
        } catch (e) {
            yield put({
                type: ERROR,
                error: true,
                payload: e
            })
        }
    }
}

export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return param => async dispatch => {
        dispatch({ type });
        // FSA - Flux Standard Action, 추가적인 값을 payload로 통일, error=true
        try {
            const payload = await promiseCreator(param);
            dispatch({
                type: SUCCESS,
                payload
            })
        } catch (e) {
            dispatch({
                type: ERROR,
                payload: e,
                error: true
            })
        }
  };
};

// 특정 id 를 처리하는 Thunk 생성함수
const defaultIdSelector = param => param;

export const createPromiseThunkById = (
    type,
    promiseCreator,
    idSelector = defaultIdSelector
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        const id = idSelector(param);
        dispatch({ type, meta: id });
        try {
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload, meta: id });
        } catch (e) {
            dispatch({ type: ERROR, error: true, payload: e, meta: id });
        }
    };
};

export const createPromiseSagaById = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action) {
        const id = action.meta
        try {
            const result = yield call(promiseCreator, action.payload);
            yield put({
                type: SUCCESS,
                payload: result,
                meta: id
            });
        } catch (e) {
            yield put({
                type: ERROR,
                error: true,
                payload: e,
                meta: id
            })
        }
    }
}
export const handleAsyncActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
      // update
      switch (action.type) {
          case type:
              return {
                  ...state,
                  [key]: reducerUtils.loading(keepData ? state[key].data : null)
              };
          case SUCCESS:
              return {
                  ...state,
                  [key]: reducerUtils.success(action.payload)
              };
          case ERROR:
              return {
                  ...state,
                  [key]: reducerUtils.error(action.payload)
              };
          default:
              return state;
      }
  }
};

export const handleAsyncActionsById = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        const id = action.meta;
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            // state[key][id]가 만들어져있지 않을 수도 있으니까 유효성을 먼저 검사 후 data 조회
                            keepData ? state[key][id] && state[key][id].data : null
                        )
                    }
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload)
                    }
                };
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload)
                    }
                };
            default:
                return state;
        }
    };
};

export const reducerUtils = {
    initial: (data = null) => ({
        loading: false,
        data: data,
        error: null,
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null,
    }),
    success: data => ({
        data,
        loading: false,
        error: null,
    }),
    error: error => ({
        error,
        loading: false,
        data: null,
    }),
};