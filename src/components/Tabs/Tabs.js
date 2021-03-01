import React from 'react';
import ListItem from "../ListItem/ListItem"
import "./Tab.scss"

const Tab = ({ todoList, removeListItem, doneList, checkOffItem }) => {

    // not sure if this is the way I should do this. It works and it doesn't re-render the DOM, so I think it's fine?
    const changeTab = e => {

        e.target.className = "active-tab" // changes the tab class of the clicked tab to "active-tab"

        // checks to see if a previous or next tab exists and sets its class to "inactive-tab"
        e.target.nextSibling ? (e.target.nextSibling.className = "inactive-tab") : (e.target.previousSibling.className = "inactive-tab") 
        
        // this changes the display style of the the todo and done tabs so that the appropriate one is displayed.
        if (e.target.id === "todo-tab-btn") {
            document.getElementById("todo-tab").style.display = "block"
            document.getElementById("done-tab").style.display = "none"
        } else {
            document.getElementById("done-tab").style.display = "block"
            document.getElementById("todo-tab").style.display = "none"
        }
    }


    /**
     * this renders both the todo and done lists. I figured keeping both rendered was fine since it's looping through and mapping an array each time it renders, so leaving them
     * in the DOM but hidden when not being viewed was a way to avoid extra re-rendering. Not that it really matters with an app this small, but still.
     * */ 
    return (
        <div className="tabs-wrapper">
            <nav>
                <div className="active-tab" onClick={changeTab} id="todo-tab-btn">ToDo</div>
                <div className="inactive-tab" onClick={changeTab} id="done-tab-btn">Done</div>
            </nav>
            <div className="tab" id="todo-tab">
                <ul className="todosList" id={`todos-todo-tab`}>{

                    // Mapping the currentListState to ListItem components with their respecive id's
                    todoList.map(listItem => {
                        return (
                            <ListItem
                                isChecked={false}
                                key={listItem.id}
                                className="listItem"
                                id={`listItem-${listItem.id}`}
                                removeListItem={removeListItem}
                                checkOffItem={checkOffItem}
                                closeBtnKey={listItem.id}
                                innerText={listItem.value}
                            />
                        )
                    })

                }
                </ul>
            </div>
            <div className="tab" id="done-tab" style={{ display: "none" }}>
                <ul className="todosList" id={`todos-done-tab`}>{

                    // Mapping the doneList to ListItem components with their respecive id's
                    doneList.map(listItem => {
                        return (
                            <ListItem
                                isChecked={true}
                                key={listItem.id}
                                className="listItem"
                                id={`listItem-${listItem.id}`}
                                removeListItem={removeListItem}
                                closeBtnKey={listItem.id}
                                checkOffItem={checkOffItem}
                                innerText={listItem.value}
                            />
                        )
                    })

                }
                </ul>
            </div>

        </div>
    )
}

export default Tab