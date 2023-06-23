import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  return (

    <div className="book">
      <div className="book-section">
        {Object.keys(books)
          && Object.keys(books).map((key) => books[key].map((book) => (
            <Book
              id={key}
              key={key}
              title={book.title}
              author={book.author}
            />
          )))}
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
