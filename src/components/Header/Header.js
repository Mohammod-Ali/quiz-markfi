import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h3><Link  className='header-icon' to='/'>Quiz MarkFi</Link></h3>
            </div>
            <div className='header-link'>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;