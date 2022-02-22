import React from 'react';
import Book from './Book';

const BooksList = () => {
  const bookList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const list = bookList.map((item) => (<li key={item.id}><Book /></li>));
  return (
    <ul>
      {list}
    </ul>
  );
};

export default BooksList;
