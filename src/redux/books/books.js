import axios from 'axios';

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

/// DELETE BOOK IN API ///

export const removeBookReducer = (id) => (dispatch) => axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zZ7EZqcy750FMbbnBRfe/books/${id}`, {
  item_id: id,
})
  .then(() => {
    dispatch(removeBook(id));
  });

///  POST NEW BOOK TO API ///
export const addBookReducer = (newBook) => (dispatch) => axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zZ7EZqcy750FMbbnBRfe/books', {
  item_id: newBook.id,
  title: newBook.title,
  category: newBook.category,
})
  .then(() => {
    dispatch(addBook(newBook));
  });

///  FETCH_BOOK_SUCCEED ///
export const fetchBookSucceed = (booksList) => ({
  type: FETCH_BOOK_SUCCEED,
  payload: booksList,
});

/// FETCH_BOOK_FAILED ///
export const fetchBookFailed = (error) => ({
  type: FETCH_BOOK_FAILED,
  payload: error,
});

/// FETCH DATA FROM API ///

export const getBooks = () => (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zZ7EZqcy750FMbbnBRfe/books')
    .then((res) => {
      const arr = [];
      const books = res.data;
      const booksArray = Object.entries(books);
      booksArray.map(([key, value]) => {
        const obj = {};
        obj.id = key;
        obj.title = value[0].title;
        obj.category = value[0].category;
        return arr.push(obj);
      });
      dispatch(fetchBookSucceed(arr));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchBookFailed(errorMsg));
    });
};
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
      return action.payload;

    case FETCH_BOOK_FAILED:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
