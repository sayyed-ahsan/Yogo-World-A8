import React from 'react';
import './Items.css'

const Items = (props) => {
    return (
        <div className='item'>
            <img className='yoga-img' src={props.item.picture} alt="" />
            <h4>{props.item.name}</h4>
            <p>{props.item.decription}</p>
            <p>For Age: {props.item.age}</p>
            <p>Time required: {props.item.time}</p>
            <button className='btn-add'>Add to List</button>
        </div>
    );
};

export default Items;