import React, { useState } from 'react';
import './TextBar.scss';

const TextBar = ({ idCounter, addTodo, incrementId }) => {

    const [textBarValue, setTexbarValue] = useState('')                 // the value of the input bar stored in state.

    const textBarInputHandler = e => setTexbarValue(e.target.value)     // sets the textbar state value to the user's input

    const addTodoItem = () => {                                                       // adds a new todoItem to the todoList
        addTodo({ id: idCounter, value: textBarValue, isComplete: false }, true)      // id is the current counter, value is the user input, isComplete is false. optional true is passed in to increment the counter [App.js ln 16]
        setTexbarValue('')                                                            // reset the textbar to blank after submission
    }

    const onEnter = e => e.key === "Enter" && addTodoItem()         // calls addTodoItem when user presses enter while typing in the text box.

    //addTodoItem is also called when the "+" button is clicked.

    return (
        <div id='textbar-wrapper'>
            <input onChange={textBarInputHandler} onKeyPress={onEnter} type="text" id="TextBar" placeholder="What do you want to do today?" value={textBarValue}></input>
            <div onClick={addTodoItem} className="button" id="addButton">+</div>
        </div>
    )
}

export default TextBar