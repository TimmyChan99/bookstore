import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as actionCreators  from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';
import { addBook, addBookReducer } from '../redux/books/books';

const Form = () => {
  const bookInfo = {
    title: '',
    category: '',
  };

  const dispatch = useDispatch();

  const [book, setBook] = useState(bookInfo);

  const { title, category } = book;

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
      category,
    };

    dispatch(addBookReducer(newBook));
  };

console.log();

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input name="title" type="text" value={title} onChange={handleChange} />
        <select name="category" id="categories" onChange={handleChange}>
          <option value="none">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return state
};

export default connect (mapStateToProps, actionCreators)(Form);

