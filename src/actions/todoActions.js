import { ADD_TODO } from './types';
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