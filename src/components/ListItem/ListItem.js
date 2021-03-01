import React from 'react';
import "./ListItem.scss"

// each list item is rendered based on the passed parameters which are pulled from the todo (todoList) and done (doneList) arrays
const ListItem = ({ isChecked, className, id, closeBtnKey, innerText, removeListItem, checkOffItem }) => {

    return (
        <li className={className} id={id}>
            <span>
                <input className="checkboxes" onChange={checkOffItem} type="checkbox" id={closeBtnKey} defaultChecked={isChecked} checked={isChecked} />
                <p className={`${className}-text`} style={isChecked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{innerText}</p>
            </span>
            <div onClick={removeListItem} className="close-btn" id={closeBtnKey}>+</div>
        </li>
    )
}

export default ListItem