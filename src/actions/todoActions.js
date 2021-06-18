import { httpRequest } from '../services/httpRequest';
import { ADD_TODO, LOAD_TODO } from './types';

export const addTodo = (data) => {
    return (dispatch) => {

        httpRequest.post("/todos", data).then((res) => {
            let action = {
                type: ADD_TODO,
                payload: res.data
            }
            
            dispatch(action)
        })
    }
}


export const addDemoTodo = () => {
    return addTodo({ title: "Test " + new Date().toDateString() });
    // return {
    //     type: ADD_TODO,
    //     payload: {
    //         title:  "Test " + new Date().toDateString()
    //     }
    // }
}

export const loadTodo = () => {
    return (dispatch) => {
        httpRequest.get("/todos").then((res) => {
            dispatch({
                type: LOAD_TODO,
                payload: res.data
            })
        });
    }
}