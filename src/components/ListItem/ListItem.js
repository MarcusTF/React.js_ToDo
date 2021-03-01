import React from 'react';
import "./ListItem.scss"


const ListItem = ({ isChecked, className, id, closeBtnKey, innerText, removeListItem, checkOffItem }) => {
    return (
        <li className={className} id={id}>
            <span>
                <input onChange={checkOffItem} type="checkbox" id={closeBtnKey} defaultChecked={isChecked} checked={isChecked} />
                <p className={`${className}-text`} style={isChecked ? {textDecoration:"line-through"} : {textDecoration:"none"}}>{innerText}</p>
            </span>
            <div onClick={removeListItem} className="close-btn" id={closeBtnKey}>x</div>
        </li>
    )
}

export default ListItem