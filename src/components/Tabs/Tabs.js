import React, { useState } from 'react';

import DoneTab from './DoneTab/DoneTab'
import TodoTab from './TodoTab/TodoTab'
import "./Tab.scss"

const Tab = ({ todoList, addTodo, removeTodo }) => {

    // STATE
    const [doneList, setDoneList] = useState([]) // the done list stored in state
    const [activeTab, setActiveTab] = useState({ todo: "active-tab", done: "inactive-tab" }) // manages the active/inactive tab styling

    // FUNCTIONS FOR CHILDREN
    const addDone = todo => doneList.push(todo)                                     // pushes a new item to the done list.
    const removeDone = id => setDoneList(doneList.filter(item => item.id !== id))   // filters out and removes a done list item by its id.

    const markDone = e => {                                                         // marks an item as done
        let selectedItem = todoList.filter(item => item.id === +e.target.id)[0]     // get the selected list item from its click event
        selectedItem.isComplete = true                                              // set isComplete to true
        addDone(selectedItem)                                                       // add the item to the done list
        removeTodo(selectedItem.id)                                                 // remove it from the todo list
    }

    const markNotDone = e => {                                                      // does the inverse of markDone()
        let selectedItem = doneList.filter(item => item.id === +e.target.id)[0]
        selectedItem.isComplete = false
        addTodo(selectedItem)
        removeDone(selectedItem.id)
    }

    // IN-FILE FUNCTIONS
    const changeTab = e => {                                            // this sets the appropriate tab to active-tab styling when clicked and sets the other inactive.
        if (e.target.id === "todo-tab-btn") {
            setActiveTab({ todo: "active-tab", done: "inactive-tab" })
        } else {
            setActiveTab({ todo: "inactive-tab", done: "active-tab" })
        }
    }

    // RENDERED COMPONENT
    return (
        <div className="tabs-wrapper">
            <nav>
                <div className={activeTab.todo} id="todo-tab-btn" onClick={changeTab}>ToDo</div>
                <div className={activeTab.done} id="done-tab-btn" onClick={changeTab}>Done</div>
            </nav>
            <div className='tab'>
                {activeTab.todo === "active-tab"
                    ? <TodoTab markDone={markDone} removeTodo={removeTodo} todoList={todoList} />
                    : <DoneTab markNotDone={markNotDone} removeDone={removeDone} doneList={doneList} />}
            </div>
        </div>
    )
}

export default Tab