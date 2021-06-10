import React from 'react';
import {connect} from 'react-redux'
import { addTodo } from '../actions/todoActions';
function TodoList (props){
    let todoUI = props.list.map(singleTodo => <li key={singleTodo.title}> {singleTodo.title} </li>)
    const addDemoTodo = () => { 
        props.addTodo({
            title: "Demo Todo" + new Date().toISOString()
        })
    }
    return (
        <div>
            <ul>
                { todoUI }
            </ul>
            <button onClick={addDemoTodo}>
                Demo Todo
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        "addTodo": addTodo(dispatch)
    }
}


function mapStateToProps(state){
    return {list: [...state.todoReducer]};
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);