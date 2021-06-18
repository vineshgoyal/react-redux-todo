import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions/todoActions';

function AddTodo (props){
    const [todo, setTodo] = React.useState({
        title: ""
    });
    
    const onChangeTodoTitle = (event) => {
        setTodo({
            title: event.target.value
        })
    }

    const clickHandler = ()=>{
        setTodo({
            title: ""
        })
        props.addTodo(todo)
    }    

    return (
        <div>
            <h3>Add new Todo</h3>
            <input type="text" value={todo.title} onChange={onChangeTodoTitle}  />
            <button onClick={clickHandler} >Add</button>
        </div>
    )
}

export default connect(null, {addTodo})(AddTodo);