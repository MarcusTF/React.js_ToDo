import React from 'react';
import ListItem from "../ListItem/ListItem"
import "./Tab.scss"

// passing props down
const Tab = ({ currentListState, removeListItem }) => {
    const tabId = "testingTab"
    return (
        <div className="tab" id={tabId}>
            <ul className="todosList" id={`todos-${tabId}`}>{

                // Mapping the currentListState to ListItem components with their respecive id's
                currentListState.map(listItem => {
                    return (
                        <ListItem
                            key             =   {listItem.id}
                            className       =   "listItem"
                            id              =   {`listItem-${listItem.id}`}
                            removeListItem  =   {removeListItem}    // passing this function ALL the way down.
                            closeBtnKey     =   {listItem.id}
                            innerText       =   {listItem.value}
                        />
                    )
                })

            }
            </ul>
        </div>
    )
}

export default Tab