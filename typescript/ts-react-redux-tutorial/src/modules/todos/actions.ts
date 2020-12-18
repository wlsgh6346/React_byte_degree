import {createAction, createStandardAction} from "typesafe-actions";

export const ADD_TODO = 'index/ADD_TODO';
export const TOGGLE_TODO = 'index/TOGGLE_TODO';
export const REMOVE_TODO = 'index/REMOVE_TODO';

let nextId = 1;

export const addTodo = createAction(ADD_TODO, action => (text: string) => action({
        id: nextId++,
        text
    })
);

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();