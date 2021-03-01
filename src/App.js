import React, { useState } from 'react';
import './App.scss'
import Tabs from './components/Tabs/Tabs';
import TextBar from './components/TextBar/TextBar';

function App() {

  // state value of the top input bar
  const [textBarValue, setTextBarValue] = useState("")

  // the current value of the to-do list in state
  const [currentListState, setCurrentListState] = useState([{ id: 0, value: "Use the input field above to add todo items!", isComplete: false }])

  const [doneList, setDoneList] = useState([])

  // running count of the ammount of created to-dos so that each to-do has a unique id
  const [idCounter, setIdCounter] = useState(1)
  
  const checkOffItem = e => {
    if (e.target.checked) {
      const clickedItem = currentListState.filter(item => item.id === parseInt(e.target.id))[0]
      clickedItem.isComplete = true
      doneList.push(clickedItem)
      setCurrentListState(currentListState.filter(item => item.id !== clickedItem.id))
    } else {
      const clickedItem = doneList.filter(item => item.id === parseInt(e.target.id))[0]
      clickedItem.isComplete = false
      currentListState.push(clickedItem)
      setDoneList(doneList.filter(item => item.id !== clickedItem.id))
    }
  }

  // handles the input into the top text bar
  const textBarInputHandler = e => setTextBarValue(e.target.value)

  // when the "X" to the right of an item is clicked this updates the list with a filter to delete it.
  // it runs a check to get the tab id to check which array to filter.
  const removeListItem = e => {
    if(e.target.parentElement.parentElement.parentElement.id === "todo-tab") {
      setCurrentListState(currentListState.filter(item => item.id !== parseInt(e.target.id)))
    } else {
      setDoneList(doneList.filter(item => item.id !== parseInt(e.target.id)))
    }
  }

  // when the "+" to the right of the input bar is clicked, the value in the input is pushed to the list, the idCounter is incremented, and the text bar is cleared.
  const clickFunction = () => {
    currentListState.push({ id: (idCounter), value: textBarValue, isComplete: false })
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
        currentListState={currentListState}
        doneList={doneList}
        removeListItem={removeListItem}
        checkOffItem={checkOffItem}
      />
    </div>
  );
}

export default App;
