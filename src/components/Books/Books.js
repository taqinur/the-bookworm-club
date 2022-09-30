import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [list, setList] = useState([]);

        useEffect( () =>{
            fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        },[])

    const handleAddToList = (book) => {
            console.log(book);
            const newList = [...list, book];
            setList(newList);
           }
        
    return (
        <div className='body-container'>
            <div className='card-container'>
                {
                    books.map(book => 
                    <Book key={book.id}
                    book ={book}
                    handleAddToList = {handleAddToList}
                    ></Book>)
                }
            </div>
            <div className="personal-info-container">
                <h5>Personal Info</h5>
                <p>Excercise Time: {list.length}</p>
            </div>
        </div>
    );
};

export default Books;