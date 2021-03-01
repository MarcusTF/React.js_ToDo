import React, { useState } from 'react';
import './App.scss'
import Tabs from './components/Tabs/Tabs';
import TextBar from './components/TextBar/TextBar';

function App() {

  // state value of the top input bar
  const [textBarValue, setTextBarValue] = useState("")

  // the current value of the to-do list in state
  const [todoList, setTodoList] = useState([{ id: 0, value: "Use the input field above to add todo items!", isComplete: false }])

  // the current value of the done list in state
  const [doneList, setDoneList] = useState([])

  // running count of the ammount of created to-dos so that each to-do has a unique id
  const [idCounter, setIdCounter] = useState(1)
  
  /**
   * checks if the checkbox is checked.
   * if true (meaning it was just checked off), moves the item from the todo array to the done array and removes it from the todo array.
   * else it does the opposite, pushes the clicked item to the todo array and removes it from the done array.
   */
  const checkOffItem = event => {
    if (event.target.checked) {
      const clickedItem = todoList.filter(item => item.id === parseInt(event.target.id))[0]
      clickedItem.isComplete = true
      doneList.push(clickedItem)
      setTodoList(todoList.filter(item => item.id !== clickedItem.id))
    } else {
      const clickedItem = doneList.filter(item => item.id === parseInt(event.target.id))[0]
      clickedItem.isComplete = false
      todoList.push(clickedItem)
      setDoneList(doneList.filter(item => item.id !== clickedItem.id))
    }
  }

  // handles the input into the top text bar
  const textBarInputHandler = event => setTextBarValue(event.target.value)

  // when the "X" to the right of an item is clicked this updates the list with a filter to delete it.
  // it runs a check to get the tab id to check which array to filter (that's that parentElement.parentElement.parentElement bit lol).
  const removeListItem = event => {
    if(event.target.parentElement.parentElement.parentElement.id === "todo-tab") {
      setTodoList(todoList.filter(item => item.id !== parseInt(event.target.id)))
    } else {
      setDoneList(doneList.filter(item => item.id !== parseInt(event.target.id)))
    }
  }

  // when the "+" to the right of the input bar is clicked, the value in the input is pushed to the list, the idCounter is incremented, and the text bar is cleared.
  const clickFunction = () => {
    todoList.push({ id: (idCounter), value: textBarValue, isComplete: false })
    setIdCounter(idCounter + 1)
    setTextBarValue("")
  }

  // listens for an "enter" keypress and runs the clickFunction().
  const watchEnter = e => e.key === "Enter" && clickFunction()

  return (
    <div className="App">
      <TextBar
        watchEnter={watchEnter}
        textBarInputHandler={textBarInputHandler}
        textBarValue={textBarValue}
        clickFunction={clickFunction}
      />
      <Tabs
        todoList={todoList}
        doneList={doneList}
        removeListItem={removeListItem}
        checkOffItem={checkOffItem}
      />
    </div>
  );
}

export default App;
