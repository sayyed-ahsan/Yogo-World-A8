import React from 'react';
import Items from '../Items/Items';

const Activities = () => {

    return (
        <div>
            <h4>Select Todays Yoga</h4>
            <div>
                {/*  */}
                <div className='yoga-item-container'>
                    <Items></Items>
                </div>
                {/*  */}
                <div className='selected-yoga-container'>
                </div>
            </div>
        </div>
    );
};

export default Activities;