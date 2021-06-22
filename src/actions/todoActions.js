import { httpRequest } from '../services/httpRequest';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, LOAD_TODO, UPDATE_TODO } from './types';

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

export const deleteTodo = (id) => {
    return (dispatch) => {
        httpRequest.delete("/todos/" + id).then((res) => {
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        });
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id
    }
}

export const updateTodo = (data) => {
    return ( dispatch )=>{
        httpRequest.patch("/todos/" + data.id, { title: data.title }).then((res)=>{
                dispatch({
                    type: UPDATE_TODO,
                    payload: res.data
                })
                
            })
    }
}