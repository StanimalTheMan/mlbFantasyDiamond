<template>
  <div class="flex-container">
    <div v-for="thirdBaseman in thirdBasemen" :key="thirdBaseman.name">
      <third-baseman
        :name="thirdBaseman.name"
        :pic="thirdBaseman.pic"
      ></third-baseman>
    </div>
  </div>
</template>

<script>
import ThirdBaseman from "./ThirdBaseman";
// inefficient probably to import all third basemen images here
import rendonProPic from "../../assets/thirdBasemen/rendon.jpeg";
import bregmanProPic from "../../assets/thirdBasemen/bregman.jpeg";
export default {
  name: "Shortstops",
  components: {
    ThirdBaseman,
  },
  beforeCreate() {
    this.thirdBasemen = [
      { name: "rendon", pic: rendonProPic },
      { name: "bregman", pic: bregmanProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
