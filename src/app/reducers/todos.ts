import { handleActions } from "redux-actions";
import { RootState } from "./state";
import { TodoActions } from "app/actions/todos";
import { TodoModel } from "app/models";

const initialState: RootState.TodoState = [];

export const todoReducer = handleActions<RootState.TodoState, TodoModel>(
    {
        [TodoActions.Type.ADD_TODO]: (state, action) => {
            return state;
        },
        [TodoActions.Type.DELETE_TODO]: (state, action) => {
            return state;
        },
        [TodoActions.Type.EDIT_TODO]: (state, action) => {
            return state;
        },
        [TodoActions.Type.COMPLETE_TODO]: (state, action) => {
            return state;
        },
        [TodoActions.Type.COMPLETE_ALL]: (state, action) => {
            return state;
        },
        [TodoActions.Type.CLEAR_COMPLETED]: (state, action) => {
            return state;
        },
    },
    initialState
);
