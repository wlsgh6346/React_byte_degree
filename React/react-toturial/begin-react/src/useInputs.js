import { useReducer, useCallback } from 'react';

function  reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            };
        case 'RESET':
            return Object.keys(state).reduce((acc, cur) => {
                acc[cur] = '';
                return acc;
        },{})
        default:
            return state;
    }

    // CHANGE
    // RESET
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value,
        });
    }, []);
    const reset = useCallback(() => {
        dispatch({
            type: 'RESET'
        });
    },[]);

    return [form, onChange, reset];
}

export default useInputs;
