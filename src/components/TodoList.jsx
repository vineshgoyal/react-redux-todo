import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux'
import { addTodo, LoadTodo } from '../actions/todoActions';
function TodoList (props){
    let todoUI = props.list.map(singleTodo => <li key={singleTodo.title}> {singleTodo.title} </li>)
    const addDemoTodo = () => { 
        props.addTodo({
            title: "Demo Todo" + new Date().toISOString()
        })
    }
        
    useEffect(()=>{
        props.loadTodo();
    },[])

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
        "addTodo": addTodo(dispatch),
        "loadTodo": LoadTodo(dispatch)
    }
}


function mapStateToProps(state){
    return {list: [...state.todoReducer]};
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);