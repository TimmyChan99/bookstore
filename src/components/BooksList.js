import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks, removeBookReducer } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();

  const bookInfo = useSelector((state) => state.booksReducer);

  const click = (e) => {
    dispatch(removeBookReducer(e.target.id));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const list = bookInfo.map((item) => (
    <li key={item.id}>
      <Book
        id={item.id}
        click={click}
        title={item.title}
        category={item.category}
      />
    </li>
  ));

  return (
    <ul>
      {list}
    </ul>
  );
};

export default BooksList;
