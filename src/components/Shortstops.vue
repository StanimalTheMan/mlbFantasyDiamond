<template>
  <div class="flex-container">
    <div v-for="shortstop in shortstops" :key="shortstop.name">
      <shortstop :name="shortstop.name" :pic="shortstop.pic"></shortstop>
    </div>
  </div>
</template>

<script>
import Shortstop from "./Shortstop";
// inefficient probably to import all shortstop images here
import lindorProPic from "../assets/shortstops/lindor.jpeg";
import tatisJrProPic from "../assets/shortstops/tatisjr.jpeg";
export default {
  name: "Shortstops",
  components: {
    Shortstop,
  },
  beforeCreate() {
    this.shortstops = [
      { name: "lindor", pic: lindorProPic },
      { name: "tatisjr", pic: tatisJrProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
