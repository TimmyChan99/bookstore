import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    category, title, click, id, author,
  } = props;
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button id={id} type="button" onClick={click}>Remove</button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
      <div>64% Completed</div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {

  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,

};

export default Book;
