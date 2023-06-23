import '../App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitHandler = async (event) => {
    event.preventDefault();
    const newBook = {
      item_id: Date.now().toString(),
      title,
      author,
      category: '',
    };

    await dispatch(addBookApi(newBook));

    // Reset form values after the dispatch is complete
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="newbook">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
