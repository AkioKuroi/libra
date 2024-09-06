<template>
  <button class="add-book">+ Add a book</button>
</template>
<script>
export default {
  name: "create-book",
};
</script>
<style scoped lang="scss">
.add-book {
  border-radius: 200px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: gray;
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  transition-property: background-color, transform;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
  &:hover {
    background-color: darkgray;
    transform: scale(1.03);
  }
}
</style>
