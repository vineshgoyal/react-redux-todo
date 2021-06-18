import React from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux'
import { addTodo, addDemoTodo, loadTodo } from '../actions/todoActions';
function TodoList (props){
    const { demoTodo, list } = props;
    let todoUI = list && list.map(singleTodo => <li key={singleTodo.id}> {singleTodo.title} </li>)
    const clickHandler = () => { 
        demoTodo();
    }
        
    useEffect(()=>{
        props.loadTodo();
    },[])

    return (
        <div>
            <ul>
                { todoUI }
            </ul>
            <button onClick={clickHandler}>
                Demo Todo
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        list: state.todoReducer
    };
}

export default connect(mapStateToProps, { demoTodo: addDemoTodo, addTodo, loadTodo } )(TodoList);