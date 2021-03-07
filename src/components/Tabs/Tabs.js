import React, { useState } from 'react';

import DoneTab from './DoneTab/DoneTab'
import TodoTab from './TodoTab/TodoTab'
import "./Tab.scss"

const Tab = ({ todoList, addTodo, removeTodo }) => {
    const [doneList, setDoneList] = useState([])
    const [activeTab, setActiveTab] = useState({ todo: "active-tab", done: "inactive-tab" })


    const addDone = todo => doneList.push(todo)
    const removeDone = id => setDoneList(doneList.filter(item => item.id !== id))

    const changeTab = e => {
        if (e.target.id === "todo-tab-btn") {
            setActiveTab({ todo: "active-tab", done: "inactive-tab" })
        } else {
            setActiveTab({ todo: "inactive-tab", done: "active-tab" })
        }
    }

    const markDone = e => {
        let selectedItem = todoList.filter(item => item.id === +e.target.id)[0]
        selectedItem.isComplete = true
        addDone(selectedItem)
        removeTodo(selectedItem.id)
    }

    const markNotDone = e => {
        let selectedItem = doneList.filter(item => item.id === +e.target.id)[0]
        selectedItem.isComplete = false
        addTodo(selectedItem)
        removeDone(selectedItem.id)
    }

    return (
        <div className="tabs-wrapper">
            <nav>
                <div className={activeTab.todo} id="todo-tab-btn" onClick={changeTab}>ToDo</div>
                <div className={activeTab.done} id="done-tab-btn" onClick={changeTab}>Done</div>
            </nav>
            <div className='tab'>
            {   activeTab.todo === "active-tab"
                ? <TodoTab markDone={markDone} removeTodo={removeTodo} todoList={todoList} />
                : <DoneTab markNotDone={markNotDone} removeDone={removeDone} doneList={doneList} /> }               
            </div>
        </div>
    )
}

export default Tab