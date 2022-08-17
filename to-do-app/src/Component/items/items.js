import React from 'react';
import { Component } from 'react'
import './items.css'

const ToDoList = (props) => {
    const { items ,deletei} = props;
    const lenth = items.length;
    const ListItem = lenth ?(items.map(item => {
        return (
            <div key={item.id}>

                <span className="name">{item.name}</span>

                <span className='task'>{item.task}</span>

                <span className="action icon" onClick={ () => {deletei(item.id)}}>&times;</span>

            </div>
        )

    }))
    :(<p>There is no data here</p>)
    return (
        <div className='ListItems'>
            <div>
                <span className="name title">Name</span>
                <span className="task title">Task </span>
                <span className="action title">Action </span>

            </div>
            {ListItem}
        </div>
    );


}
export default ToDoList;