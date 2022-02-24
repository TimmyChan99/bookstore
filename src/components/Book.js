import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = (props) => {
  const {
    category, title, click, id,
  } = props;
  return (
    <div className="book_container">
      <div className="book_info">
        <p>{category}</p>
        <h2>{title}</h2>
        <ul>
          <li>
            <button className="option_btn" type="button">Comments</button>
          </li>
          <li>
            <button className="option_btn" id={id} type="button" onClick={click}>Remove</button>
          </li>
          <li>
            <button className="option_btn" type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="isCompleted">
        <div className="oval" />
        <div className="statistic">
          <span>25%</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="progress">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {

  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,

};

export default Book;
