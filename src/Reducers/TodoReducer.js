import { ADD_TODO, LOAD_TODO } from '../actions/types';

function TodoReducer(state = [{ title: "Default todo" }, { title: "Default todo 2" }], action) {
    switch (action.type) {
        case ADD_TODO:
            let newState = [...state];
            newState.push(action.payload);
            return newState;

        case LOAD_TODO:
            action.payload.forEach((singleTodo) => {
                state.push(singleTodo)
            });
            return state;
    }
    return state;
}

export default TodoReducer;