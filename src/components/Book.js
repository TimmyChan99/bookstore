import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    category, title, click, id,
  } = props;
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>Author</p>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><button id={id} type="button" onClick={click}>Remove</button></li>
        <li><button type="button">Edit</button></li>
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

// Book.propTypes = {
//   bookInfo: PropTypes.shape({
//     category: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     click: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default Book;
