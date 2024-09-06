<script>
import store from "../store";
export default {
  name: "create-book",
  data() {
    return {
      showWindow: false,
      id: null,
      title: "",
      author: "",
      publicationYear: "",
      rating: 0,
      haveRead: false,
    };
  },
  methods: {
    addBook(id, title, author, publicationYear, rating, haveRead) {
      store.commit("ADD_BOOK", {
        id: id,
        title: title,
        author: author,
        publicationYear: publicationYear,
        rating: rating,
        haveRead: haveRead,
      });
      this.showHideWindow();
    },

    showHideWindow() {
      this.showWindow = !this.showWindow;
      this.id = null;
      this.title = "";
      this.author = "";
      this.publicationYear = "";
      this.rating = 0;
      this.haveRead = false;
    },

    getNeededId() {
      return store.getters.getArrayLength + 1;
    },
  },
};
</script>

<template>
  <button class="add-book" @click="showHideWindow">+ Add a book</button>
  <div class="modal" v-if="showWindow">
    <div class="modal-content">
      <h3>Add a new book</h3>
      <form
        @submit.prevent="
          addBook(
            this.getNeededId(),
            title,
            author,
            publicationYear,
            rating,
            haveRead
          )
        "
      >
        <div class="inputbox">
          <span>Title</span>
          <input required="required" type="text" v-model="title" />
          <span>Author</span>
          <input required="required" type="text" v-model="author" />
          <span>Publication Year</span>
          <input
            required="required"
            type="number"
            v-model="publicationYear"
            min="1200"
            :max="new Date().getFullYear()"
          />
          <span>Rating (1 - 5)</span>
          <input
            required="required"
            type="number"
            min="1"
            max="5"
            v-model="rating"
          />

          <i></i>
        </div>

        <input type="checkbox" v-model="haveRead" id="check" /> Have read?
        <button type="submit">Add book</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 75%;
    background-color: rgb(48, 48, 48);
    border: 2px solid rgba(114, 106, 106, 0.2);
    border-radius: 20px;
    padding: 20px;
  }

  h3 {
    margin-top: 4vh;
    font-size: 2.3rem;
    color: white;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding-top: 1vh;

  .inputbox {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 0.5vh;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      transition: border-color 0.3s;

      &:focus {
        border-color: #007bff;
        outline: none;
      }

      &::placeholder {
        color: #aaa;
      }
    }

    span {
      margin-top: 5px;
      color: #ccc;
      font-size: 0.9rem;
    }
  }

  #check {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  button {
    appearance: none;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
}

.add-book {
  border-radius: 200px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: gray;
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  transition: background-color 0.15s, transform 0.15s;
  z-index: 100;

  &:hover {
    background-color: darkgray;
    transform: scale(1.03);
  }
}
</style>
