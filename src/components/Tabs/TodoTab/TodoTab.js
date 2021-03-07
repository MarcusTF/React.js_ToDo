import React from 'react';
import '../ListItem.scss' // todo and done use the same styling.

const TodoTab = ({ markDone, removeTodo, todoList }) => {

    const removeTodoHandler = e => removeTodo(+e.target.id)     // this gets the event.target.id and passes it to removeTodo

    return (
        <ul className='todosList'>
            {todoList.map(item => {
                return (
                    <li className='listItem' key={item.id}>
                        <span>
                            <input className="checkboxes" onChange={markDone} type="checkbox" id={item.id} defaultChecked={item.isComplete} />
                            <p className="listItem-text">{item.value}</p>
                        </span>
                        <div onClick={removeTodoHandler} className="close-btn" id={item.id}>+</div>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoTab