import { ADD_TODO, LOAD_TODO } from '../actions/types';

function TodoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            let newState = [...state];
            newState.push(action.payload);
            return newState;

        case LOAD_TODO:
            return state.concat( action.payload)
    }
    return state;
}

export default TodoReducer;