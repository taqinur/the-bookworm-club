import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> The BookWorm Club</h2>
        </div>
    );
};

export default Header;