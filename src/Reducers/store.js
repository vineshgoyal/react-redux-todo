import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TodoReducer from './TodoReducer';
import UserReducer from './UserReducer';

const combinedReducers = combineReducers({
    todoReducer: TodoReducer,
    userReducer: UserReducer
});

export default createStore(combinedReducers, applyMiddleware(thunk));
