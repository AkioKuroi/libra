<script>
import store from "../store";
export default {
  name: "book-card",
  props: {
    id: Number,
    title: String,
    author: String,
    publicationYear: Number,
    rating: Number,
    haveRead: Boolean,
  },

  methods: {
    deleteBook(bookId) {
      store.commit("DELETE_BOOK", bookId);
    },
  },
};
</script>

<template>
  <div class="book-card">
    <h2 class="book-title">{{ title }}</h2>
    <p class="book-author">{{ author }}</p>
    <p class="book-publication-year">{{ publicationYear }}</p>
    <p class="book-rating">Rating: {{ rating }} / 5 ★</p>
    <p class="is-read">{{ haveRead ? "Already read" : "Not read yet" }}</p>
    <button class="delete-book" @click="deleteBook(id)">Delete</button>
  </div>
</template>

<style scoped lang="scss">
@import "../globalStyles/global";

$border-styles-dark: 2px solid rgb(54, 52, 52);
.delete-book {
  margin-top: 1vh;
  background-color: rgb(143, 7, 7);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 8px;

  opacity: 75%;

  &:hover {
    background-color: lighten(rgb(177, 9, 9), 10%);
  }
}

.book-card {
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 20vw;
  margin-top: 5vh;

  .book-author {
    opacity: 75%;
    font-style: italic;
  }

  .book-publication-year {
    margin-top: 5px;
    font-weight: 700;
  }
}

@media ($theme: dark) {
  .book-card {
    border: $border-styles-dark;
  }
}
</style>
