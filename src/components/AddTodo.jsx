import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {addTodo, updateTodo} from '../actions/todoActions';

function AddTodo (props){
    const [todo, setTodo] = React.useState({
        title: ""
    });
    
    const onChangeTodoTitle = (event) => {
        setTodo({
            ...todo,
            title: event.target.value
        })
    }

    const clickHandler = ()=>{
        if(props.selectedTodo){
            props.updateTodo(todo)
        }else {
            props.addTodo(todo)
        }
        setTodo({
            title: ""
        })
        
    }
    
    useEffect( ()=>{
        setTodo({...props.selectedTodo});
    }, [props.selectedTodoId] )

    return (
        <div>
            <h3>Add new Todo</h3>
            <input type="text" value={todo.title} onChange={onChangeTodoTitle}  />
            <button onClick={clickHandler} >
                { props.selectedTodo ? "Update" : "Add" }
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedTodo: state.todoReducer.selectedTodo,
        selectedTodoId: state.todoReducer.selectedTodo ? state.todoReducer.selectedTodo.id : null
    };
}

export default connect(mapStateToProps, {addTodo, updateTodo})(AddTodo);