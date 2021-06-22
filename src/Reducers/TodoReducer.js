import { ADD_TODO, DELETE_TODO, EDIT_TODO, LOAD_TODO, UPDATE_TODO } from '../actions/types';
let initTodoState = {
    todoList: [],
    selectedTodo: null
}
function TodoReducer(state = initTodoState, action) {
    switch (action.type) {
        case ADD_TODO:
            let newTodoList = [ ...state.todoList ];
            newTodoList.push(action.payload);
            return { ...state, todoList: newTodoList };

        case LOAD_TODO:
            return { ...state, todoList: action.payload };

        case DELETE_TODO:
            let newTodoListAfterDelete = state.todoList.filter(singleTodo => singleTodo.id != action.payload)
            return { ...state, todoList: newTodoListAfterDelete };

        case EDIT_TODO:
            let selectedTodo;
            state.todoList.forEach((singleTodo) => {
                if (singleTodo.id == action.payload) {
                    selectedTodo = singleTodo;
                }
            });
            return { ...state, selectedTodo };

        case UPDATE_TODO:
            let selectedTodoIndex;
            // Clone list
            let newTodoListForUpdate = [ ...state.todoList ];

            // Find index
            newTodoListForUpdate.forEach((singleTodo, index) => {
                if (singleTodo.id == action.payload.id) {
                    selectedTodoIndex = index;
                }
            });

            // Update existing record
            newTodoListForUpdate[selectedTodoIndex] = action.payload;

            // Return final result
            return { ...state, todoList: newTodoListForUpdate, selectedTodo: null };
    }
    return state;
}

export default TodoReducer;