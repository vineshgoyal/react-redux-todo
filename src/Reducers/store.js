import { createStore, combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import UserReducer from './UserReducer';

const combinedReducers = combineReducers({
    todoReducer: TodoReducer,
    userReducer: UserReducer
});

export default createStore(combinedReducers);
