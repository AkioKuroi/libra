import VuexPersistence from "vuex-persist";
import { createStore } from "vuex";

const local = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
  state: {
    books: [],
  },
  getters: {
    getBooks(state) {
      return state.books;
    },
    getArrayLength(state) {
      return state.books.length;
    },
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    ADD_BOOK(state, book) {
      state.books.push(book);
    },
    UPDATE_BOOK(state, updatedBook) {
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index >= 0) {
        state.books[index] = updatedBook;
      }
    },
    DELETE_BOOK(state, bookId) {
      const index = state.books.findIndex((book) => book.id === bookId);
      if (index >= 0) {
        state.books.splice(index, 1);
      }
    },
    CLEAR_ARRAY(state) {
      state.books = [];
    },
  },
  plugins: [local.plugin],
});

export default store;
