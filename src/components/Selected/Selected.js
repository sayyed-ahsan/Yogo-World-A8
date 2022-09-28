import React from 'react';
import './Selected.css'

const Selected = () => {
    return (
        <div className='selectedt-info'>
            <h1>Jahid Hossin</h1>
            <div className='person-info'>
                <div className='info-1'>
                    <h4 className='info-2'>75<span>kg</span></h4>
                    <p className='info-3'>Weight</p>
                </div>
                <div className='info-1'>
                    <h4 className='info-2'>75<span>kg</span></h4>
                    <p className='info-3'>Weight</p>
                </div>
                <div className='info-1'>
                    <h4 className='info-2'>75<span>kg</span></h4>
                    <p className='info-3'>Weight</p>
                </div>
            </div>
            <h4>Add A Break</h4>
            <div className='minuties'>
                <p className='minute'>2m</p>
                <p className='minute'>4m</p>
                <p className='minute'>5m</p>
                <p className='minute'>6m</p>
                <p className='minute'>9m</p>
            </div>
            <h3>Exercise Detail</h3>
            <div className='exercise-time'>
                <p>Exercise Time</p>
                <p>45m</p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p>5m</p>
            </div>
            <button className='tost-btn'>Activity Complited</button>
        </div>
    );
};

export default Selected;