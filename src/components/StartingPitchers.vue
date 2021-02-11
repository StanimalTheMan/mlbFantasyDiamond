<template>
  <div class="flex-container">
    <div
      v-for="startingPitcher in startingPitchers"
      :key="startingPitcher.name"
    >
      <starting-pitcher
        :name="startingPitcher.name"
        :pic="startingPitcher.pic"
      ></starting-pitcher>
    </div>
  </div>
</template>

<script>
import StartingPitcher from "./StartingPitcher";
// inefficient probably to import all starting pitcher images here
import degromProPic from "../assets/startingPitchers/degrom.jpeg";
import coleProPic from "../assets/startingPitchers/cole.jpeg";
export default {
  name: "StartingPitchers",
  components: {
    StartingPitcher,
  },
  beforeCreate() {
    this.startingPitchers = [
      { name: "degrom", pic: degromProPic },
      { name: "cole", pic: coleProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
