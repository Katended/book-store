import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteBookApi } from '../redux/books/booksSlice';

const Book = ({
  id, title, author,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(DeleteBookApi(id));
  };

  return (
    <div key={id} className="book-section-one">
      <div className="genre-section">
        <small id="book-category">Action</small>
        <div className="book-title">
          <h2>{title}</h2>
        </div>
        <p>{author}</p>
        <div className="updatebook">
          <button type="button" id="comment">Comment</button>
          <div className="left-section-1" />
          <button type="button" id="remove" onClick={handleRemoveBook}>Remove</button>
          <div className="left-section-1" />
          <button type="button" id="edit">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div
          className="prt"
          style={{
            '--clr': 'rgb(59, 59, 245)',
            '--num': 65,
          }}
        >
          <svg>
            <circle cx={70} cy={70} r={40} />
            <circle cx={70} cy={70} r={40} />
          </svg>
        </div>
        <div className="output">
          <h3>64%</h3>
          <span>Completed</span>
        </div>
      </div>
      <div className="left-section-2" />

      <div className="update-progress">
        <span>CURRENT CHAPTER</span>
        <h4>Chapter 17</h4>

        <button type="button">UPDATE PROGRESS</button>

      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
