import React from 'react';
import BooksList from '../components/BooksList';
import Form from '../components/Form';

const BooksPage = () => (
  <>
    <BooksList />
    <hr className="separator_line" />
    <Form />
  </>
);

export default BooksPage;
