import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookReducer } from '../redux/books/books';
import '../styles/form.css';

const Form = () => {
  const bookInfo = {
    title: '',
    author: '',
    category: '',
  };

  const dispatch = useDispatch();

  const [book, setBook] = useState(bookInfo);

  const { title, category, author } = book;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBookReducer(newBook));
    setBook(bookInfo);
  };

  return (
    <div className="form_container">
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={submitBookToStore}>
        <input name="title" type="text" value={title} placeholder="Title" onChange={handleChange} />
        <select name="category" id="categories" onChange={handleChange}>
          <option hidden value="none">Category</option>
          <option value="Action">Action</option>
          <option value="Mystery">Mystery</option>
          <option value="Historical">Historical</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science">Science</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
