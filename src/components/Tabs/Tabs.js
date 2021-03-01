import React, { useState } from 'react';
import ListItem from "../ListItem/ListItem"
import "./Tab.scss"

// passing props down
const Tab = ({ currentListState, removeListItem, doneList, checkOffItem }) => {
    const changeTab = e=>{
        e.target.className="active-tab"
        e.target.nextSibling ? (e.target.nextSibling.className = "inactive-tab") : (e.target.previousSibling.className = "inactive-tab")
        if ( e.target.id === "todo-tab-btn" ) {
            document.getElementById("todo-tab").style.display = "block"
            document.getElementById("done-tab").style.display = "none"
        } else {
            document.getElementById("done-tab").style.display = "block"
            document.getElementById("todo-tab").style.display = "none"
        }
    }
    return (
        <div className="tabs-wrapper">
            <nav>
            <div className="active-tab" onClick={changeTab} id="todo-tab-btn">ToDo</div>
            <div className="inactive-tab" onClick={changeTab} id="done-tab-btn">Done</div>
            </nav>
            <div className="tab" id="todo-tab">
                <ul className="todosList" id={`todos-todo-tab`}>{

                    // Mapping the currentListState to ListItem components with their respecive id's
                    currentListState.map(listItem => {
                        return (
                            <ListItem
                            isChecked={false}
                            key={listItem.id}
                            className="listItem"
                            id={`listItem-${listItem.id}`}
                            removeListItem={removeListItem}    // passing this function ALL the way down.
                            checkOffItem={checkOffItem}
                            closeBtnKey={listItem.id}
                            innerText={listItem.value}
                            />
                            )
                        })
                        
                    }
                </ul>
            </div>
            <div className="tab" id="done-tab" style={{display:"none"}}>
                <ul className="todosList" id={`todos-done-tab`}>{
                    
                    // Mapping the currentListState to ListItem components with their respecive id's
                    doneList.map(listItem => {
                        return (
                            <ListItem
                            isChecked={true}
                                key={listItem.id}
                                className="listItem"
                                id={`listItem-${listItem.id}`}
                                removeListItem={removeListItem}    // passing this function ALL the way down.
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