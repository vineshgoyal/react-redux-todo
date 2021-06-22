import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import TodoReducer from './TodoReducer';
import UserReducer from './UserReducer';

let composerEnhance =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
    todoReducer: TodoReducer,
    userReducer: UserReducer
});

let enhancedMiddleware = composerEnhance(applyMiddleware(thunk))

export default createStore(combinedReducers, enhancedMiddleware);
