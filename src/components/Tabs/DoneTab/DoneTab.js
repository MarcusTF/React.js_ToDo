import React from 'react';
import '../ListItem.scss' // todo and done use the same styling.

const DoneTab = ({ markNotDone, removeDone, doneList }) => {

    const removeDoneHandler = e => removeDone(+e.target.id)     // this gets the event.target.id and passes it to removeDone

    return (
        <ul className='todosList'>
            {doneList.map(item => {
                return (
                    <li className='listItem' key={item.id}>
                        <span>
                            <input className="checkboxes" onChange={markNotDone} type="checkbox" id={item.id} defaultChecked={item.isComplete} />
                            <p className="listItem-text" style={{ textDecoration: 'line-through' }}>{item.value}</p>
                        </span>
                        <div onClick={removeDoneHandler} className="close-btn" id={item.id}>+</div>
                    </li>
                )
            })}
        </ul>
    )
}

export default DoneTab