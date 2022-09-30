import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
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
                <h2>Taqinur Tahmid</h2>
                <p><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                <div className="personal-info">
                    <div className="personal-info-age">
                    <h4>25 <small>yrs</small></h4>
                    <p>Age</p>
                    </div>
                    <div className="personal-info-profession">
                    <h4>Student</h4>
                    <p>Profession</p>
                    </div>
                </div>
                <h3>Add A Break</h3>
                <div className="break-buttons">
                    <button>
                        <span className="break-1">1</span> hr
                    </button>
                    <button>
                        <span className="break-2">2</span> hrs
                    </button>
                    <button>
                        <span className="break-3">3</span> hrs
                    </button>
                    <button>
                        <span className="break-4">4</span> hrs
                    </button>
                    <button>
                        <span className="break-5">5</span> hrs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Books;