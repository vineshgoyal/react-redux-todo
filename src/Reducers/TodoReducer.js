import {ADD_TODO} from '../actions/types';

function TodoReducer(state = [{title: "Default todo"}], action) {
    switch (action.type) {
        case ADD_TODO:
        let newState = [...state];
        newState.push(action.payload);
        return newState;
    }
    return state;
}

export default TodoReducer;