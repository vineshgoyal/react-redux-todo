import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { addTwo, Sum } from '../services/utils';
import { addTodo, addDemoTodo, loadTodo, deleteTodo, editTodo } from '../actions/todoActions';
function TodoList(props) {
    const { demoTodo, list } = props;

    function onDelete(id) {
        props.deleteTodo(id)
    }

    const sumRes = Sum(12, 8);
    const addTwoInNum = addTwo(50);

    function onEdit(id) {
        props.editTodo(id)
    }

    let todoUI = list && list.map(singleTodo => <li key={singleTodo.id}>
        {singleTodo.title}
        <button onClick={onDelete.bind(null, singleTodo.id)} >x</button>
        <button onClick={onEdit.bind(null, singleTodo.id)} >Edit</button>
    </li>)
    const clickHandler = () => {
        demoTodo();
    }

    useEffect(() => {
        props.loadTodo();
    }, [])

    return (
        <div>
            <ul>
                {todoUI}
            </ul>
            <button onClick={clickHandler}>
                Demo Todo {sumRes} {addTwoInNum}
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        list: state.todoReducer.todoList
    };
}

export default connect(mapStateToProps, {
    demoTodo: addDemoTodo,
    addTodo,
    loadTodo,
    deleteTodo,
    editTodo
})(TodoList);