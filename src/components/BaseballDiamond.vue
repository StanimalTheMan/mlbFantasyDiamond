<template>
  <div style="position: relative;">
    <img
      alt="Fantasy Field"
      src="../assets/BaseballDiamond.png"
      @click="getMouseCoordinates"
    />
    <!-- <img v-if="shortstop" :src="shortstopPic" /> -->
    <p class="shortstop">{{ shortstop }}</p>
    <p class="startingPitcher">{{ startingPitcher }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BaseballDiamond",
  methods: {
    getMouseCoordinates(event) {
      console.log(event.clientX);
      console.log(event.clientY);
    },
  },
  computed: {
    ...mapGetters(["fantasyTeam", "shortstop", "startingPitcher"]),
    // shortstopPic() {
    //   return `../assets/shortstops/${this.shortstop}.jpeg`;
    // },
  },
};
</script>

<style scoped>
.shortstop {
  position: absolute;
  left: 300px;
  top: 200px;
}
.startingPitcher {
  position: absolute;
  left: 387px;
  top: 314px;
}
</style>
