import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books || []);

  return (

    <div className="book">
      <div className="book-section">

        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}

        <AddBook />
      </div>
    </div>
  );
};

export default Books;
