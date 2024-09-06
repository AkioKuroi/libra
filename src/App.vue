<script>
import BookCard from "./components/BookCard.vue";
import CreateBook from "./components/CreateBook.vue";
import store from "./store";
import PropertiesComponent from "./components/PropertiesComponent.vue";

export default {
  name: "App",
  components: {
    BookCard,
    CreateBook,
    PropertiesComponent,
  },
  computed: {
    arrLen() {
      return store.getters.getArrayLength;
    },

    getBooks() {
      return store.getters.getBooks;
    },
  },
};
</script>

<template>
  <div class="app">
    <h1>Libra</h1>
    <div class="books" v-if="arrLen > 0">
      <book-card
        v-for="book in getBooks"
        :key="book.id"
        :id="book.id"
        :title="book.title"
        :author="book.author"
        :publication-year="book.publicationYear"
        :rating="book.rating"
        :haveRead="book.haveRead"
      />
    </div>
    <div class="there-is-no-books" v-else>
      <h2>Sorry</h2>
      <p>There is no books you added.</p>
    </div>
    <create-book />
    <!-- TODO: Add Goodreads support -->
    <properties-component />
  </div>
</template>

<style lang="scss">
@import "globalStyles/global";
:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}
* {
  margin: 0;
  cursor: pointer;
}

.there-is-no-books {
  h2 {
    font-size: 1.5rem;
  }
  margin-top: 4vh;
  text-align: center;
  width: 100%;
  height: 100%;
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
