import React, { useState } from 'react';
import './App.scss'
import Tab from './components/Tabs/Tab';
import TextBar from './components/TextBar/TextBar';

function App() {
  
  // state value of the top input bar
  const [textBarValue, setTextBarValue] = useState("")

  // the current value of the to-do list in state
  const [currentListState, setCurrentListState] = useState([])

  // running count of the ammount of created to-dos so that each to-do has a unique id
  const [idCounter, setIdCounter] = useState(1)

  // handles the input into the top text bar
  const textBarInputHandler = e => setTextBarValue(e.target.value)

  // when the "X" to the right of an item is clicked this updates the list with a filter to delete it.
  const removeListItem = e => setCurrentListState(currentListState.filter(item => item.id !== parseInt(e.target.id)))

  // when the "+" to the right of the input bar is clicked, the value in the input is pushed to the list, the idCounter is incremented, and the text bar is cleared.
  const clickFunction = () => {
    currentListState.push({ id: (idCounter), value: textBarValue })
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
      <Tab
        currentListState={currentListState}
        removeListItem={removeListItem}
      />
    </div>
  );
}

export default App;
