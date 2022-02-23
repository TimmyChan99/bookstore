import axios from "axios";

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

////////////

export const addBookReducer = (newBook) => (dispatch) => axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zZ7EZqcy750FMbbnBRfe/books', {
    "item_id": newBook.id,
    "title": newBook.title,
    "category": newBook.category
})
  .then((res) => {
    console.log(res.data);
    // dispatch(addBook(res.data))
  });

////////////

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:

      return [...state,
        { ...action.payload },
      ];

    case REMOVE_BOOK:

      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};



export default reducer;
