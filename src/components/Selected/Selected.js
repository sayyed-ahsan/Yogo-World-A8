import React, { useEffect, useState } from 'react';
import './Selected.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profileImg from '../img/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg';

const Selected = (props) => {


    const [brackTimee, setBrackTime] = useState(0);

    useEffect(() => {
        const newTime = localStorage.getItem('brack-time')
        if (newTime) {
            setBrackTime(newTime)
        }
        else {
            setBrackTime(0)
        }

    }, [])


    const brackTime = (time) => {
        localStorage.setItem('brack-time', time);
        const newTime = localStorage.getItem('brack-time')
        console.log(newTime);
        setBrackTime(newTime)
    }



    return (
        <div className='selectedt-info'>
            <img className='profile-pic' src={profileImg} alt="" />
            <h1 className='profile-name'>Sabrina Khatun</h1>
            <p className='profile-address'>Amarica, Newjarsi</p>
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
                <p onClick={() => { brackTime(2) }} className='minute'>2m</p>
                <p onClick={() => { brackTime(3) }} className='minute'>3m</p>
                <p onClick={() => { brackTime(5) }} className='minute'>5m</p>
                <p onClick={() => { brackTime(7) }} className='minute'>7m</p>
                <p onClick={() => { brackTime(9) }} className='minute'>9m</p>
            </div>
            <h3>Yoga Detail</h3>
            <div className='exercise-time'>
                <p>Yoga Time</p>
                <p>{props.yogaTime}m</p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p>{brackTimee}m</p>
            </div>
            <button onClick={() => toast.success('Congratulation...!')} className='tost-btn'>Activity Complited</button>

        </div>
    );
};

export default Selected;