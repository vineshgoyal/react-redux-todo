import { httpRequest } from '../services/httpRequest';
import { ADD_TODO, LOAD_TODO } from './types';
export const addTodo = function(dispatch) {
    return (data) => {
        let action = {
            type: ADD_TODO,
            payload: data
        }
        dispatch(action)
    }
}

export const editTodo = function(dispatch) {
    return (data) => {
        let action = {
            type: ADD_TODO,
            payload: data
        }
        dispatch(action)
    }
}

export const LoadTodo = function(dispatch) {
    return () => {
        httpRequest.get("/todos").then((res) => {
            let action = {
                type: LOAD_TODO,
                payload: res.data
            }
            dispatch(action)
        });
    }
}