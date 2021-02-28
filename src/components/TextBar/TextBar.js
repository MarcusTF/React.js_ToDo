import React from 'react';
import './TextBar.scss';

// not much to see here. Just passing in all of the props to their appropriate places.
const TextBar = ({clickFunction, textBarInputHandler, watchEnter, textBarValue}) => {
    return(
    <div id='textbar-wrapper'>
        <input onChange={textBarInputHandler} onKeyPress={watchEnter} type="text" id="TextBar" placeholder="What do you want to do today?" value={textBarValue}></input>
        <div onClick={clickFunction} className="button" id="addButton">+</div>
    </div>
)}

export default TextBar