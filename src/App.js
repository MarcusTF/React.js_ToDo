import React, { useState } from 'react';

import './App.scss'
import Tabs from './components/Tabs/Tabs';
import TextBar from './components/TextBar/TextBar';
import { mockList } from './mock-list'



function App() {

  const [todoList, setTodoList] = useState(mockList)
  const [idCounter, setIdCounter] = useState(todoList.length)

  const incrementId = () => setIdCounter(idCounter + 1)
  const addTodo = todo => { todoList.push(todo); incrementId() }
  const removeTodo = id => setTodoList(todoList.filter(item => item.id !== id))

  return (
    <div className="App">
      <TextBar
        todoList={todoList}
        idCounter={idCounter}
        addTodo={addTodo}
        incrementId={incrementId}
      />
      <Tabs
        todoList={todoList}
        addTodo={addTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
