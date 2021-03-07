import React, { useState } from 'react';

import './App.scss'
import Tabs from './components/Tabs/Tabs';
import TextBar from './components/TextBar/TextBar';
import { mockList } from './mock-list'



function App() {

  const [todoList, setTodoList] = useState(mockList)                              // the todoList is initialized to mockList and is stored in state.
  const [idCounter, setIdCounter] = useState(todoList.length)                     // idCounter is set to the length of the initial list. This value is incremented every time a new list item is added so that each item has a unique id.

  const incrementId = () => setIdCounter(idCounter + 1)                                               // incrementId increments the idCounter
  const addTodo = (todo , increment = false) => { todoList.push(todo); increment && incrementId() }   // addTodo pushes a new todo to the todoList. Optionally increments the counter
  const removeTodo = id => setTodoList(todoList.filter(item => item.id !== id))                       // removeTodo removes a todo from the todoList by setting the todoList to a version where the item has been filtered out.

  return (
    <div className="App">
      <TextBar                          // TextBar is the main input bar at the top of the app.
        todoList={todoList}
        idCounter={idCounter}
        addTodo={addTodo}
      />
      <Tabs                             // Tabs is the parent component that houses the todo and done lists as well as the navigation between them.
        todoList={todoList}
        addTodo={addTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
