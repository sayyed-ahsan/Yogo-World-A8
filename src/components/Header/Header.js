import React from 'react';
import './Header.css'
import { GrYoga } from 'react-icons/gr';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-text'><GrYoga className='yoga-icon' />Yoga World</h2>
        </div>
    );
};

export default Header;