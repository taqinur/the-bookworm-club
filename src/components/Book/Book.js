import React from 'react';
import './Book.css';

const Book = (props) => {
   const {name, description, time, img} = props.book; 
    return (
        <div className='book'>
            <img src={img} alt="" />
            <div className="book-info">
                <h3 className='book-name'>{name}</h3>
                <p>{description}</p>
                <h4>Time Required: {time} hours</h4>
            </div>
            <button className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Book;