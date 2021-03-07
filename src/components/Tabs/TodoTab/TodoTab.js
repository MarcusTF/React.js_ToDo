import React from 'react';
import '../ListItem.scss'

const TodoTab = ({ markDone, removeTodo, todoList }) => {
    return (
        <ul className='todosList'>
            {todoList.map(item => {
                return (
                    <li className='listItem' key={item.id}>
                    <span>
                            <input className="checkboxes" onChange={markDone} type="checkbox" id={item.id} defaultChecked={item.isComplete} />
                            <p className="listItem-text">{item.value}</p>
                        </span>
                        <div onClick={removeTodo} className="close-btn" id={item.id}>+</div>
                    </li>
                )})}
        </ul>
    )
}

export default TodoTab