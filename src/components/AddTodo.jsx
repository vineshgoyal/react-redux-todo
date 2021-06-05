import React from 'react';


export function AddTodo (props){
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
        props.onAdd(todo)
    }    

    return (
        <div>
            <h3>Add new Todo</h3>
            <input type="text" value={todo.title} onChange={onChangeTodoTitle}  />
            <button onClick={clickHandler} >Add</button>
        </div>
    )
}