import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook, getBooks, fetchBook } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();

  const bookInfo = useSelector((state) => state.booksReducer);
  
  // const click = (e) => {
  //   dispatch(removeBook(e.target.id));
  // };

  

  useEffect(() => {
    dispatch(getBooks());
  }, [])

  const click = () => {
    // dispatch(getBooks());
    dispatch(getBooks());
  };
  
 
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
      <li>
        <button type="button" onClick={click}>
          click
          </button>
      </li>
    </ul>
  );
};

export default BooksList;
