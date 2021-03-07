import React from 'react';
import '../ListItem.scss'

const DoneTab = ({ markNotDone, removeDone, doneList }) => {
    return (
        <ul className='todosList'>
            {doneList.map(item => {
                return (
                    <li className='listItem' key={item.id}>
                        <span>
                            <input className="checkboxes" onChange={markNotDone} type="checkbox" id={item.id} defaultChecked={item.isComplete} />
                            <p className="listItem-text" style={{textDecoration: 'line-through'}}>{item.value}</p>
                        </span>
                        <div onClick={removeDone} className="close-btn" id={item.id}>+</div>
                    </li>
                )
            })}
        </ul>
    )
}

export default DoneTab