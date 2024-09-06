<template>
  <div class="book-card">
    <h2 class="book-title">{{ title }}</h2>
    <p class="book-author">{{ author }}</p>
    <p class="book-publication-year">{{ publicationYear }}</p>
    <p class="book-rating">Rating: {{ rating }} / 5 ★</p>
    <p class="is-read">{{ haveRead ? "Already read" : "Not read yet" }}</p>
  </div>
</template>
<script>
export default {
  name: "book-card",
  props: {
    title: String,
    author: String,
    publicationYear: Number,
    rating: Number,
    haveRead: Boolean,
  },
};
</script>
<style scoped lang="scss">
@import "../globalStyles/global";

$border-styles-dark: 2px solid rgb(54, 52, 52);
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
