<script setup>
import BookCard from "./components/BookCard.vue";
import CreateBook from "./components/CreateBook.vue";
import books from "./example/books.json";
</script>

<template>
  <div class="app">
    <h1>Libra</h1>
    <div class="books">
      <book-card
        v-for="book in books"
        :key="book.id"
        :title="book.title"
        :author="book.author"
        :publication-year="book.publicationYear"
        :rating="book.rating"
        :have-read="book.haveRead"
      />
    </div>
    <create-book />
    <!-- TODO: Add Goodreads support -->
  </div>
</template>

<style lang="scss">
@import "globalStyles/global";

* {
  margin: 0;
  cursor: pointer;
}

.app {
  padding: 20px 20px;
}

.books {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 3vw;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

h1 {
  font-weight: 800;
  text-align: center;
}

body {
  font-family: $fonts;
}

@media ($theme: dark) {
  body {
    background-color: $bg-dark-primary;
    color: white;
  }
}

// TODO: Add styles for light mode
@media ($theme: light) {
}
</style>
