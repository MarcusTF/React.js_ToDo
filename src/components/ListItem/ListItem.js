import React from 'react';
import "./ListItem.scss"


const ListItem = ({ className, id, closeBtnKey, innerText, removeListItem }) => {
    return (
        <li className={className} id={id}>
            <p className={`${className}-text`} >{innerText}</p>
            <div onClick={removeListItem} className="close-btn" id={closeBtnKey}>x</div>
        </li>
    )
}

export default ListItem