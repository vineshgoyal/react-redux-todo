import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let myStore = createStore(function (state = [{title: "Default todo"}], action) {
  switch (action.type) {
    case "ADD":
      let newState = [...state];
      newState.push(action.payload);
      return newState;
  }
  return state;
});



function App() {
  const onAddHandler = (todo) => {
    console.log('todo:', todo)
  }

  return (
    <Provider store={myStore} >
      <div className="App">
        <AddTodo onAdd={onAddHandler} />
        <TodoList />
      </div>
    </Provider>

  );
}

export default App;
