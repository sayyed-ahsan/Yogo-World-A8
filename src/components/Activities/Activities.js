import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import Selected from '../Selected/Selected';
import './Activities.css'

const Activities = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div >
            <div className='activities'>
                <div className='yoga-item-container'>
                    {
                        items.map(item => <Items
                            key={item.id}
                            item={item}
                        ></Items>)
                    }
                </div>
                {/*  */}
                <div className='selected-yoga-container'>
                    <Selected></Selected>
                </div>
            </div>
        </div>
    );
};

export default Activities;