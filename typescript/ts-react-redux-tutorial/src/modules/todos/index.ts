import {createStandardAction, createAction, ActionType, createReducer } from "typesafe-actions";

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = createAction(ADD_TODO, action => (text: string) => action({
    id: nextId++,
    text
    })
);

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

const actions = {
    addTodo,
    toggleTodo,
    removeTodo
};

type TodoAction = ActionType<typeof actions>;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [];

const todos = createReducer<TodoState, TodoAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
    [TOGGLE_TODO]: (state, action) => state.map(todo => todo.id === action.payload
                                                        ? {...todo, done: !todo.done }
                                                        : todo),
    [REMOVE_TODO]: (state, action) => state.filter(todo => todo.id !== action.payload)
});

// function todos(state: TodoState = initialState, action: TodoAction) {
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat({
//                 id: action.payload.id,
//                 text: action.payload.text,
//                 done: false
//             });
//         case TOGGLE_TODO:
//             return state.map(todo => todo.id===action.payload ? {...todo, done: !todo.done } : {...todo});
//         case REMOVE_TODO:
//             return state.filter(todo => todo.id!==action.payload);
//         default:
//             return state;
//     }
// }

export default todos;