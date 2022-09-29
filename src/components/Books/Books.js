import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
        useEffect( () =>{
            fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        },[])
        
    return (
        <div className='body-container'>
            <div className='card-container'>
                {
                    books.map(book => 
                    <Book key={book.id}
                    book ={book}></Book>)
                }
            </div>
            <div className="personal-info">
                <h5>Personal Info</h5>
            </div>
        </div>
    );
};

export default Books;