<script>
// TODO: Add exporting to file
export default {
  name: "properties-component",
  data() {
    return {
      svgProperties: require("@/assets/svg/properties.svg"),
      showSettings: false,
    };
  },

  methods: {
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
  },
};
</script>

<template>
  <div class="properties">
    <img
      :src="svgProperties"
      alt="Properties"
      width="32"
      height="32"
      @click="toggleSettings"
    />
  </div>

  <div class="settings" v-if="showSettings">
    <button @click="exportBooks">Export all books to TXT file</button>
    <button @click="toggleSettings">Close</button>
  </div>
</template>

<style scoped lang="scss">
.settings {
  button {
    border-radius: 200px;
    border: 2px solid rgba($color: #fff, $alpha: 0.4);
    background-color: transparent;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 1.5vh;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 80px;
  background-color: rgba($color: #000000, $alpha: 0.7);
  height: 10vh;
  border-radius: 15px;
}

.properties {
  img {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-bottom: 20px;
    margin-right: 20px;
    background-color: rgba($color: #000, $alpha: 0.4);
    padding: 10px;
    border-radius: 200px;
  }
}
</style>
