import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div className='all-ans'>
            <h2 className='answer'>Aswers</h2>
            <h4 className='qustion'>How does react Woarks?</h4>
            <p className='answer'>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
            <h4 className='qustion'>What is the difference between props and state in React component?</h4>
            <p className='answer'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h4 className='qustion'>What are the usecase of useeffect in react?</h4>
            <p className='answer'>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: directly updating the DOM, setting up subscriptions or timers, etc. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
    );
};

export default Answer;