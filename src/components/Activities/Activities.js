import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import Selected from '../Selected/Selected';
import './Activities.css'

const Activities = () => {
    const [items, setItems] = useState([]);
    const [yogaTime, setYogaTime] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    let yTime = 0;
    const handleAddToCard = (time) => {
        yTime = yogaTime + time;
        console.log(yTime)
        setYogaTime(yTime)
    }

    return (
        <div >
            <div className='activities'>
                <div className='yoga-item-container'>
                    {
                        items.map(item => <Items

                            item={item}
                            handleAddToCard={handleAddToCard}
                        ></Items>)
                    }
                </div>
                {/*  */}
                <div className='selected-yoga-container'>
                    <Selected
                        yogaTime={yogaTime}
                    ></Selected>
                </div>
            </div>
        </div>
    );
};

export default Activities;