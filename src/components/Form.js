import React, { useState } from 'react';


const Form = () => {
  const bookInfo = {
    title: '',
    category: '',
  };
  const [book, setBook] = useState(bookInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBook(book);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" value={book.title} onChange={handleChange} />
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
export default Form;
