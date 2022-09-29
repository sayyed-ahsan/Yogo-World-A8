import React, { useEffect, useState } from 'react';
import Answer from '../Answer/Answer';
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
                <div>
                    <div className='yoga-item-container'>
                        {
                            items.map(item => <Items

                                item={item}
                                handleAddToCard={handleAddToCard}
                            ></Items>)
                        }
                    </div>
                    <Answer></Answer>

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