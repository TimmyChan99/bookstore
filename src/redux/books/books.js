import axios from 'axios';
import { objectOf } from 'prop-types';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const FETCH_BOOK_SUCCEED = 'bookStore/books/FETCH_BOOK_SUCCEED';
const FETCH_BOOK_FAILED = 'bookStore/books/FETCH_BOOK_FAILED';


const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

/// /////////

export const addBookReducer = (newBook) => (dispatch) => axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zZ7EZqcy750FMbbnBRfe/books', {
  "item_id": newBook.id,
  "title": newBook.title,
  "category": newBook.category
})
  .then((res) => {
    console.log(res.data);
    dispatch(addBook(newBook))
  });

///////////////////////////////////////////////////

 ///  FETCH_BOOK_SUCCEED ///
  export const fetchBookSucceed = (booksList) => {
    return {
      type: FETCH_BOOK_SUCCEED,
      payload: booksList
    }
  }

  /// FETCH_BOOK_FAILED ///
  export const fetchBookFailed = (error) => {
    return {
      type: FETCH_BOOK_FAILED,
      payload: error
    }
  }

  export const getBooks = () => (dispatch) => {
  
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zZ7EZqcy750FMbbnBRfe/books')
   .then((res) => {
     let arr = [];
     const books = res.data
     const booksArray = Object.entries(books)
    booksArray.map(([key, value]) => {
     const obj = {};
      obj.id = key;
      obj.title = value[0].title 
     obj.category = value[0].category
     arr.push(obj)
    })
     dispatch(fetchBookSucceed(arr))
    })
  .catch(error => {
    const errorMsg = error.message
    dispatch(fetchBookFailed(errorMsg))
  })
  
 }
/// /////////

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:

      return [...state,
        { ...action.payload },
      ];

    case REMOVE_BOOK:

      return state.filter((book) => book.id !== action.payload);


    case FETCH_BOOK_SUCCEED:
      return action.payload

      case FETCH_BOOK_FAILED:
        return action.payload
        
    default:
      return state;
  }
};

export default reducer;
