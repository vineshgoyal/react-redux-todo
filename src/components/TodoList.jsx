import React from 'react';
import {connect} from 'react-redux'

function TodoList (props){
    let todoUI = props.list.map(singleTodo => <li key={singleTodo.title}> {singleTodo.title} </li>)
    return (
        <ul>
            { todoUI }
        </ul>
    )
}

function mapStateToProps(state){
    return {list: [...state.todoReducer]};
}


export default connect(mapStateToProps)(TodoList);