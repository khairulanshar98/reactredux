import { combineReducers } from 'redux';
import { todosReducer } from './todo';

export const reducers = combineReducers<any>({
    todos: todosReducer
})