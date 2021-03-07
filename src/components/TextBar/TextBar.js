import React, { useState } from 'react';
import './TextBar.scss';

// not much to see here. Just passing in all of the props to their appropriate places.
const TextBar = ({ idCounter, addTodo, incrementId }) => {

    const [textBarValue, setTexbarValue] = useState('')

    const textBarInputHandler = e => setTexbarValue(e.target.value)
    
    const addTodoItem = () => {
        addTodo({ id: idCounter, text: textBarValue, isComplete: false })
        incrementId()
    }

    const onEnter = e => e.key === "Enter" && addTodoItem()

    return (
        <div id='textbar-wrapper'>
            <input onChange={textBarInputHandler} onKeyPress={onEnter} type="text" id="TextBar" placeholder="What do you want to do today?" value={textBarValue}></input>
            <div onClick={addTodoItem} className="button" id="addButton">+</div>
        </div>
    )
}

export default TextBar